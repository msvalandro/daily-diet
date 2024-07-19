import { IconProps } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { ButtonContainer, ButtonTypeStyleProps, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
  Icon?: React.ElementType<IconProps>
}

export function Button({
  title,
  type = 'PRIMARY',
  Icon,
  ...rest
}: ButtonProps) {
  const { COLORS } = useTheme()

  return (
    <ButtonContainer type={type} {...rest}>
      {Icon && (
        <Icon
          size={18}
          color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_100}
        />
      )}

      <Title type={type}>{title}</Title>
    </ButtonContainer>
  )
}
