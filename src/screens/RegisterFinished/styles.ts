import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const RegisterFinishedContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex: 1;
  align-items: center;
  justify-content: center;
`

export type TitleTypeStyleProps = 'SUCCESS' | 'DANGER'

interface TitleProps {
  type: TitleTypeStyleProps
}

export const Title = styled.Text<TitleProps>`
  margin-bottom: 8px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === 'SUCCESS'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const FeedbackImage = styled.Image`
  height: 288px;
  width: 224px;
  margin-top: 40px;
  margin-bottom: 32px;
`
