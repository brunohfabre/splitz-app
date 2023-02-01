import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { toMoney } from 'vanilla-masker'
import { z } from 'zod'

import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { PageHeader } from '@components/PageHeader'
import { TextInput } from '@components/TextInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@lib/api'
import { FriendType } from '@pages/Friends'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAuthStore } from '@stores/authStore'
import { useMutation, useQuery } from '@tanstack/react-query'

import { FriendShimmer } from './FriendShimmer'
import {
  Container,
  Content,
  Footer,
  FriendsContainer,
  ValueContainer,
} from './styles'
import { User } from './User'

const splitBillFormSchema = z.object({
  name: z.string().min(1, 'Required'),
})

type SplitBillFormData = z.infer<typeof splitBillFormSchema>

export function SplitBill() {
  const navigation = useNavigation()
  const route = useRoute()
  const insets = useSafeAreaInsets()

  const params = route.params as { value: string }

  const user = useAuthStore((state) => state.user)

  const [usersSelected, setUsersSelected] = useState<string[]>([])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SplitBillFormData>({
    resolver: zodResolver(splitBillFormSchema),
  })

  const { data: friends, isLoading: isFriendsLoading } = useQuery(
    ['friends'],
    async () => {
      const response = await api.get<{ friends: FriendType[] }>('/friends')

      return response.data.friends.map((item) =>
        item.friend.id === user.id ? item.user : item.friend,
      )
    },
  )

  const { mutateAsync: splitBill, isLoading: isSplitBillLoading } = useMutation(
    async (data: SplitBillFormData) => {
      const { name } = data
      const totalValue = Number(
        toMoney(params.value).replaceAll('.', '').replace(',', '.'),
      )
      const users = usersSelected

      const response = await api.post('/bills', {
        name,
        totalValue,
        users,
      })

      return response.data
    },
    {
      onSuccess: () => {
        navigation.reset({
          index: 1,
          routes: [{ name: 'dashboard' }, { name: 'split-bill-success' }],
        })
      },
    },
  )

  function handleSplitBill(data: SplitBillFormData) {
    if (!usersSelected.length) {
      alert('Unable to continue without selecting at least one friend.')

      return
    }

    splitBill(data)
  }

  function handleSelectUser(id: string) {
    const findUser = usersSelected.some((item) => item === id)

    if (findUser) {
      setUsersSelected((prevState) => prevState.filter((item) => item !== id))
    } else {
      setUsersSelected((prevState) => [...prevState, id])
    }
  }

  return (
    <Container style={{ paddingTop: insets.top }}>
      <PageHeader title="Split" />

      {!friends && isFriendsLoading ? (
        <>
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <View
              style={{
                height: 16,
                width: 100,
                backgroundColor: '#d9d9d9',
              }}
            />
          </View>

          <Content>
            <FriendShimmer />
            <FriendShimmer />
            <FriendShimmer />
            <FriendShimmer />
          </Content>

          <Footer
            style={{ paddingBottom: insets.bottom + 24 }}
            colors={['rgba(255, 255, 255, 0)', '#ffffff']}
          >
            <View style={{ backgroundColor: '#d9d9d9', height: 56 }} />
          </Footer>
        </>
      ) : (
        <>
          <Content>
            <ValueContainer>
              <Heading size="xl">
                {toMoney(params.value, {
                  unit: 'R$',
                })}
              </Heading>
            </ValueContainer>

            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Name"
                  autoCorrect={false}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <FriendsContainer
              contentContainerStyle={{
                paddingBottom: 48 + 56 + insets.bottom,
              }}
            >
              {friends.map((item) => (
                <User
                  key={item.id}
                  user={item}
                  selected={usersSelected.some(
                    (userSelected) => userSelected === item.id,
                  )}
                  onSelect={() => handleSelectUser(item.id)}
                />
              ))}
            </FriendsContainer>
          </Content>

          <Footer
            style={{ paddingBottom: insets.bottom + 24 }}
            colors={['rgba(255, 255, 255, 0)', '#ffffff']}
          >
            <Button
              onLongPress={handleSubmit(handleSplitBill as any)}
              isLoading={isSplitBillLoading}
            >
              Hold to split
            </Button>
          </Footer>
        </>
      )}
    </Container>
  )
}
