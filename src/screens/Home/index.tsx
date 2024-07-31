import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { useNavigation } from '@react-navigation/native'
import { Plus } from 'phosphor-react-native'

import { CardContainer, CardIcon, HomeContainer, Title } from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleGoToStatistics() {
    navigation.navigate('statistics')
  }

  function handleNewMeal() {
    navigation.navigate('register')
  }

  function handleGoToMeal() {
    navigation.navigate('meal')
  }

  return (
    <HomeContainer>
      <Header />

      <CardContainer onPress={handleGoToStatistics}>
        <Card
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          type="SUCCESS"
        />

        <CardIcon />
      </CardContainer>

      <Title>Refeições</Title>

      <Button title="Nova refeição" Icon={Plus} onPress={handleNewMeal} />
    </HomeContainer>
  )
}
