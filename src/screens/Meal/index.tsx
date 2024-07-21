import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
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

export function Meal() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleEditMeal() {
    navigation.navigate('register')
  }

  function handleDeleteMeal() {
    Alert.alert('Deseja realmente excluir o registro da refeição?', '', [
      { style: 'cancel', text: 'Cancelar' },
      {
        style: 'destructive',
        text: 'Sim, excluir',
        onPress: () => navigation.navigate('home'),
      },
    ])
  }

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
          <Name>Sanduíche</Name>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>
        </Info>

        <Info>
          <Label>Data e hora</Label>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>
        </Info>

        <Tag>
          <Dot type="SUCCESS" />
          <TagLabel>dentro da dieta</TagLabel>
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
