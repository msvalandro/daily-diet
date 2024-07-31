import { ArrowUpRight } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const HomeContainer = styled(SafeAreaView)`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
`

export const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;
`

export const SectionTitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const CardContainer = styled.TouchableOpacity`
  margin-top: 32px;
`

export const CardIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`
