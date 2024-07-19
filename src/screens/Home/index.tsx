import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Plus } from 'phosphor-react-native'

import { HomeContainer, Title } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <Card style={{ marginTop: 32 }}>
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </Card>

      <Title>Refeições</Title>

      <Button title="Nova refeição" Icon={Plus} />
    </HomeContainer>
  )
}
