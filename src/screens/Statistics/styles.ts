import { ArrowLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const StatisticsContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  flex: 1;
`

export const StatisticsHeader = styled.TouchableOpacity`
  height: 128px;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  margin-top: 32px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Content = styled.View`
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 24px;
  left: 24px;
`
