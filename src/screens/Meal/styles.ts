import { ArrowLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const MealContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
`

export const MealHeader = styled.TouchableOpacity`
  height: 60px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
`

export const TitleContainer = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Content = styled.View`
  height: 100%;
  padding: 40px 24px;
  padding-bottom: 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Name = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 20px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Info = styled.View`
  margin-bottom: 24px;
`

export const Label = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Tag = styled.View`
  height: 34px;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 999px;

  flex-direction: row;
  align-self: baseline;
  align-items: center;
  justify-content: center;
`

export const TagLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export type DotTypeStyleProps = 'SUCCESS' | 'DANGER'

interface DotProps {
  type: DotTypeStyleProps
}

export const Dot = styled.View<DotProps>`
  height: 8px;
  width: 8px;
  margin-right: 8px;

  background-color: ${({ theme, type }) =>
    type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 999px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  position: absolute;
  left: 24px;
  top: 0;
`
