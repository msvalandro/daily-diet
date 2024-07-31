import { MealDTO } from '@dtos/MealDTO'
import { TouchableOpacityProps } from 'react-native'

import { Hour, MealCardContainer, Name, Separator, Status } from './styles'

interface MealCardProps extends TouchableOpacityProps {
  data: MealDTO
}

export function MealCard({ data, ...rest }: MealCardProps) {
  const { hour, name, valid } = data

  return (
    <MealCardContainer {...rest}>
      <Hour>{hour}</Hour>
      <Separator />
      <Name>{name}</Name>

      <Status valid={valid} />
    </MealCardContainer>
  )
}
