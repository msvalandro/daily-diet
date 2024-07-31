import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { MealCard } from '@components/MealCard'
import { MealDTO } from '@dtos/MealDTO'
import { MealsByDayDTO } from '@dtos/MealsByDayDTO'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { storageMealGetAll } from '@storage/storageMeal'
import { Plus } from 'phosphor-react-native'
import { useCallback, useState } from 'react'
import { SectionList, Text } from 'react-native'

import {
  CardContainer,
  CardIcon,
  HomeContainer,
  SectionTitle,
  Title,
} from './styles'

export function Home() {
  const [meals, setMeals] = useState<MealsByDayDTO[]>([])

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

  async function fetchMeals() {
    const data = await storageMealGetAll()

    const groupedMeals = data.reduce(
      (acc: { [key: string]: MealDTO[] }, meal) => {
        const { date } = meal

        if (!acc[date]) {
          acc[date] = []
        }

        acc[date].push(meal)

        return acc
      },
      {},
    )

    const mealsByDay = Object.entries(groupedMeals).map(([date, meals]) => {
      return {
        title: date,
        data: meals,
      }
    })

    setMeals(mealsByDay)
  }
  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

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

      <Button
        title="Nova refeição"
        Icon={Plus}
        onPress={handleNewMeal}
        style={{ marginBottom: 32 }}
      />

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <SectionTitle>{section.title.replaceAll('/', '.')}</SectionTitle>
        )}
        renderItem={({ item }) => (
          <MealCard data={item} onPress={handleGoToMeal} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          meals.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center' }}>
            Não há refeições registradas ainda.
          </Text>
        )}
      />
    </HomeContainer>
  )
}
