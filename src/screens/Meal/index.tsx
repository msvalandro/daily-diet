import { Button } from '@components/Button'
import { MealDTO } from '@dtos/MealDTO'
import { useNavigation, useRoute } from '@react-navigation/native'
import { storageMealGet, storageMealRemove } from '@storage/storageMeal'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import {
  BackIcon,
  Content,
  Description,
  Dot,
  Info,
  Label,
  MealContainer,
  MealHeader,
  Name,
  Tag,
  TagLabel,
  Title,
  TitleContainer,
} from './styles'

interface RouteParams {
  id: string
}

export function Meal() {
  const [meal, setMeal] = useState<MealDTO>({} as MealDTO)

  const navigation = useNavigation()

  const route = useRoute()
  const { id } = route.params as RouteParams

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleEditMeal() {
    navigation.navigate('register', { id })
  }

  async function deleteMeal() {
    await storageMealRemove(id)
    navigation.navigate('home')
  }

  function handleDeleteMeal() {
    Alert.alert('Deseja realmente excluir o registro da refeição?', '', [
      { style: 'cancel', text: 'Cancelar' },
      {
        style: 'destructive',
        text: 'Sim, excluir',
        onPress: deleteMeal,
      },
    ])
  }

  async function fetchMeal() {
    const data = await storageMealGet(id)

    if (data) {
      setMeal(data)
    }
  }

  useEffect(() => {
    fetchMeal()
  }, [id])

  return (
    <MealContainer>
      <MealHeader onPress={handleGoBack}>
        <TitleContainer>
          <BackIcon />

          <Title>Refeição</Title>
        </TitleContainer>
      </MealHeader>

      <Content>
        <Info>
          <Name>{meal.name}</Name>
          <Description>{meal.description}</Description>
        </Info>

        <Info>
          <Label>Data e hora</Label>
          <Description>
            {meal.date} às {meal.hour}
          </Description>
        </Info>

        <Tag>
          <Dot type={meal.valid ? 'SUCCESS' : 'DANGER'} />
          <TagLabel>
            {meal.valid ? 'dentro da dieta' : 'fora da dieta'}
          </TagLabel>
        </Tag>

        <Button
          title="Editar refeição"
          Icon={PencilSimpleLine}
          style={{ marginTop: 'auto' }}
          onPress={handleEditMeal}
        />
        <Button
          title="Excluir refeição"
          type="SECONDARY"
          Icon={Trash}
          style={{ marginTop: 8, marginBottom: 80 }}
          onPress={handleDeleteMeal}
        />
      </Content>
    </MealContainer>
  )
}
