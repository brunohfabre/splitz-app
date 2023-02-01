import { useState } from 'react'

import { toMoney } from 'vanilla-masker'

import Backspace from '@assets/icons/Backspace.svg'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { PageHeader } from '@components/PageHeader'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Content,
  PadContainer,
  PadRow,
  PadButton,
  ValueContainer,
} from './styles'

export function SplitBillValue() {
  const [value, setValue] = useState(0)

  const navigation = useNavigation()

  function handleAddNumber(number: number) {
    setValue((prevState) => Number(`${prevState}${number}`))
  }

  function handleDeleteNumber() {
    setValue((prevState) => Number(String(prevState).slice(0, -1)))
  }

  function handleNavigateToCreateBill() {
    if (!value) {
      alert('To continue enter a valid value')
    } else {
      navigation.navigate('split-bill', {
        value,
      })
    }
  }

  return (
    <Container>
      <PageHeader title="Bill value" />

      <Content>
        <ValueContainer>
          <Text size="xs" style={{ color: '#A1A1A1', marginRight: 4 }}>
            R$
          </Text>
          <Heading size="4xl">{toMoney(value)}</Heading>
        </ValueContainer>
      </Content>

      <PadContainer>
        <PadRow>
          <PadButton onPress={() => handleAddNumber(1)}>
            <Heading size="3xl">1</Heading>
          </PadButton>
          <PadButton onPress={() => handleAddNumber(2)}>
            <Heading size="3xl">2</Heading>
          </PadButton>
          <PadButton onPress={() => handleAddNumber(3)}>
            <Heading size="3xl">3</Heading>
          </PadButton>
        </PadRow>
        <PadRow>
          <PadButton onPress={() => handleAddNumber(4)}>
            <Heading size="3xl">4</Heading>
          </PadButton>
          <PadButton onPress={() => handleAddNumber(5)}>
            <Heading size="3xl">5</Heading>
          </PadButton>
          <PadButton onPress={() => handleAddNumber(6)}>
            <Heading size="3xl">6</Heading>
          </PadButton>
        </PadRow>
        <PadRow>
          <PadButton onPress={() => handleAddNumber(7)}>
            <Heading size="3xl">7</Heading>
          </PadButton>
          <PadButton onPress={() => handleAddNumber(8)}>
            <Heading size="3xl">8</Heading>
          </PadButton>
          <PadButton onPress={() => handleAddNumber(9)}>
            <Heading size="3xl">9</Heading>
          </PadButton>
        </PadRow>
        <PadRow>
          <PadButton disabled></PadButton>
          <PadButton onPress={() => handleAddNumber(0)}>
            <Heading size="3xl">0</Heading>
          </PadButton>
          <PadButton onPress={handleDeleteNumber}>
            <Backspace />
          </PadButton>
        </PadRow>
      </PadContainer>

      <Button style={{ margin: 24 }} onPress={handleNavigateToCreateBill}>
        Next
      </Button>
    </Container>
  )
}
