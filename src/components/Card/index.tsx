import { Highlight } from '@components/Highlight'
import { TouchableOpacityProps } from 'react-native'

import { CardContainer, CardTypeStyleProps } from './styles'

interface CardProps extends TouchableOpacityProps {
  title: string
  subtitle: string
  type?: CardTypeStyleProps
}

export function Card({
  title,
  subtitle,
  type = 'DEFAULT',
  ...rest
}: CardProps) {
  return (
    <CardContainer type={type} {...rest}>
      <Highlight title={title} subtitle={subtitle} />
    </CardContainer>
  )
}
