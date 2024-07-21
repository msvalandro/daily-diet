import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { useNavigation } from '@react-navigation/native'
import { Plus } from 'phosphor-react-native'

import { CardContainer, CardIcon, HomeContainer, Title } from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToStatistics() {
    navigation.navigate('statistics')
  }

  return (
    <HomeContainer>
      <Header />

      <CardContainer onPress={handleNavigateToStatistics}>
        <Card
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          type="SUCCESS"
        />

        <CardIcon />
      </CardContainer>

      <Title>Refeições</Title>

      <Button title="Nova refeição" Icon={Plus} />
    </HomeContainer>
  )
}
