import { StatusBar } from 'expo-status-bar'

import { PageHeader } from '@components/PageHeader'

import { Container } from './styles'

export function CreateBillGroups() {
  return (
    <>
      <Container>
        <PageHeader title="Friends" />
      </Container>

      <StatusBar />
    </>
  )
}
