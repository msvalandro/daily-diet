import { Card } from '@components/Card'
import { Header } from '@components/Header'

import { HomeContainer, Title } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <Card style={{ marginTop: 32 }} />
    </HomeContainer>
  )
}
