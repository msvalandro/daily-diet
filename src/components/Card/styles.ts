import { ArrowUpRight } from 'phosphor-react-native'
import styled from 'styled-components/native'

export type CardTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface CardContainerProps {
  type: CardTypeStyleProps
}

export const CardContainer = styled.TouchableOpacity<CardContainerProps>`
  height: 102px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`
