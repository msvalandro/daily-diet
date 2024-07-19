import { TouchableOpacityProps } from 'react-native'

import { CardContainer, CardTypeStyleProps, Icon } from './styles'

interface CardProps extends TouchableOpacityProps {
  type?: CardTypeStyleProps
}

export function Card({ type = 'PRIMARY', ...rest }: CardProps) {
  return (
    <CardContainer type={type} {...rest}>
      <Icon />
    </CardContainer>
  )
}
