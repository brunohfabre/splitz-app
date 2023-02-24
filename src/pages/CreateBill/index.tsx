import { useRef, useState } from 'react'

import * as ImagePicker from 'expo-image-picker'
import { StatusBar } from 'expo-status-bar'
import { z } from 'zod'

import ArrowDown from '@assets/icons/ArrowDown.svg'
import ArrowUp from '@assets/icons/ArrowUp.svg'
import { Button } from '@components/Button'
import { Footer } from '@components/Footer'
import { MoneyInput } from '@components/MoneyInput'
import { PageHeader } from '@components/PageHeader'
import { Text } from '@components/Text'
import { TextInput } from '@components/TextInput'
import { api } from '@lib/api'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { getValidationErrors } from '@utils/getValidationErrors'

import { useFriendshipsStore } from './stores/friendshipsStore'
import { useGroupsStore } from './stores/groupsStore'
import {
  Container,
  Content,
  InvoiceImage,
  OptionsContainer,
  PictureButton,
} from './styles'

const createBillFormSchema = z.object({
  value: z.string().min(1, 'required'),
  name: z.string().min(1, 'required'),
})

type CreateBillFormData = {
  value: string
  name: string
}

export function CreateBill() {
  const formRef = useRef<FormHandles>(null)

  const navigation = useNavigation()
  const queryClient = useQueryClient()

  const { friendships, clearFriendships } = useFriendshipsStore((state) => ({
    friendships: state.friendships,
    clearFriendships: state.clearFriendships,
  }))
  const groups = useGroupsStore((state) => state.groups)

  const [type, setType] = useState('INCOME')
  const [invoiceFile, setInvoiceFile] = useState(null)

  const { mutateAsync: createBill, isLoading: isCreateBillLoading } =
    useMutation(
      async (data: CreateBillFormData) => {
        const { value, name } = data

        const friends = friendships.map((friendship) => friendship.friendId)

        const formData = new FormData()

        formData.append('type', type)
        formData.append('value', value)
        formData.append('name', name)

        friends.forEach((item) => {
          formData.append('friends', item)
        })

        groups.forEach((item) => {
          formData.append('groups', item)
        })

        if (invoiceFile) {
          const fileName =
            invoiceFile.uri.split('/')[invoiceFile.uri.split('/').length - 1]

          formData.append('file', {
            uri: invoiceFile.uri,
            type: invoiceFile.type,
            name: fileName,
          } as any)
        }

        const response = await api.post('/bills', formData)

        return response.data
      },
      {
        onSuccess: ({ bill }) => {
          const { id, name, total_value, type, created_at, billUsers } = bill

          queryClient.setQueryData(['bills'], (prevState: any) => [
            ...prevState,
            {
              id,
              name,
              totalValue: total_value,
              type,
              createdAt: created_at,
              billUsers,
              isSplit: !!billUsers.length,
            },
          ])

          navigation.dispatch(
            StackActions.replace('create-bill-success', {
              type,
              isSplit: friendships.length > 0,
            }),
          )
        },
      },
    )

  function handleSubmit(data: CreateBillFormData) {
    try {
      const parsedData = createBillFormSchema.parse(data)

      createBill(parsedData)
    } catch (err) {
      if (err instanceof z.ZodError) {
        formRef.current.setErrors(getValidationErrors(err))
      }
    }
  }

  function handleChangeTypeToIncome() {
    setType('INCOME')

    clearFriendships()
  }

  function handleChangeTypeToOutcome() {
    setType('OUTCOME')
  }

  function handleNavigateToFriends() {
    navigation.navigate('create-bill-friends')
  }

  function handleNavigateToGroups() {
    navigation.navigate('create-bill-groups')
  }

  async function handleSelectImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setInvoiceFile(result.assets[0])
    }
  }

  return (
    <>
      <Container>
        <PageHeader title="Create bill" />

        <Content>
          {invoiceFile ? (
            <InvoiceImage source={invoiceFile} resizeMode="cover" />
          ) : (
            <PictureButton onPress={handleSelectImage} activeOpacity={0.6}>
              <Text size="sm" style={{ color: '#A1A1A1' }}>
                Press to add picture
              </Text>
            </PictureButton>
          )}

          <OptionsContainer>
            <Button
              style={{
                backgroundColor: type === 'INCOME' ? '#D9D9D9' : '#F1F1F1',
              }}
              block
              onPress={handleChangeTypeToIncome}
              icon={<ArrowDown />}
            >
              Income
            </Button>
            <Button
              style={{
                backgroundColor: type === 'OUTCOME' ? '#D9D9D9' : '#F1F1F1',
                marginLeft: 12,
              }}
              block
              onPress={handleChangeTypeToOutcome}
              icon={<ArrowUp />}
            >
              Outcome
            </Button>
          </OptionsContainer>

          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ padding: 24, gap: 12 }}
          >
            <MoneyInput name="value" placeholder="Value" />
            <TextInput name="name" placeholder="Name" />
          </Form>

          {type === 'OUTCOME' && (
            <OptionsContainer>
              <Button block onPress={handleNavigateToFriends}>
                {`${friendships.length || 'Add'} friend${
                  friendships.length === 0 || friendships.length > 1 ? 's' : ''
                }`}
              </Button>
              <Button
                style={{
                  marginLeft: 12,
                }}
                block
                disabled
                onPress={handleNavigateToGroups}
              >
                {`${groups.length || 'Add'} group${
                  groups.length === 0 || groups.length > 1 ? 's' : ''
                }`}
              </Button>
            </OptionsContainer>
          )}
        </Content>

        <Footer>
          <Button
            block
            onLongPress={() => formRef.current.submitForm()}
            isLoading={isCreateBillLoading}
          >
            Hold to finish
          </Button>
        </Footer>
      </Container>

      <StatusBar style="dark" />
    </>
  )
}
