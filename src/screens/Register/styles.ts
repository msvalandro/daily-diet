import { ArrowLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const RegisterContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
`

export const RegisterHeader = styled.TouchableOpacity`
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

export const Form = styled.View`
  height: 100%;
  padding: 40px 24px;
  padding-bottom: 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

interface InputContainerProps {
  fromRow?: boolean
}

export const InputContainer = styled.View<InputContainerProps>`
  margin-bottom: 24px;

  ${({ fromRow }) =>
    fromRow &&
    css`
      flex: 1;
    `}
`

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Input = styled.TextInput`
  height: 48px;
  padding: 0 12px;

  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  position: absolute;
  left: 24px;
  top: 0;
`
