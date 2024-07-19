import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import { HomeContainer, Title } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <Card style={{ marginTop: 32 }}>
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </Card>
    </HomeContainer>
  )
}
