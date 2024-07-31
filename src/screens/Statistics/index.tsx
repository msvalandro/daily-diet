import { Highlight } from '@components/Highlight'
import { Row } from '@components/Row'
import { MealDTO } from '@dtos/MealDTO'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { storageMealGetAll } from '@storage/storageMeal'
import { useCallback, useMemo, useState } from 'react'

import {
  BackIcon,
  Content,
  StatisticsCard,
  StatisticsContainer,
  StatisticsHeader,
  Title,
} from './styles'

export function Statistics() {
  const [meals, setMeals] = useState<MealDTO[]>([])

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  async function fetchMeals() {
    const data = await storageMealGetAll()

    setMeals(data)
  }

  const validMealsPercentage = useMemo(() => {
    const numberOfMeals = meals.length
    const numberOfValidMeals = meals.filter((meal) => meal.valid).length
    const percentage = (numberOfValidMeals / numberOfMeals) * 100

    return `${percentage.toFixed(2)}%`
  }, [meals])

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <StatisticsContainer>
      <StatisticsHeader onPress={handleGoBack}>
        <BackIcon />
        <Highlight
          title={validMealsPercentage}
          subtitle="das refeições dentro da dieta"
        />
      </StatisticsHeader>

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticsCard
          title={meals.filter((meal) => meal.valid).length}
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <StatisticsCard title={meals.length} subtitle="refeições registradas" />

        <Row>
          <StatisticsCard
            fromRow
            isFirst
            type="SUCCESS"
            title={meals.filter((meal) => meal.valid).length}
            subtitle="refeições dentro da dieta"
          />
          <StatisticsCard
            fromRow
            type="DANGER"
            title={meals.filter((meal) => !meal.valid).length}
            subtitle="refeições fora da dieta"
          />
        </Row>
      </Content>
    </StatisticsContainer>
  )
}
