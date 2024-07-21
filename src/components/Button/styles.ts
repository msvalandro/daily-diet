import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface ButtonProps {
  type: ButtonTypeStyleProps
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  height: 50px;
  width: 100%;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_200 : 'transparent'};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme, type }) =>
    type === 'SECONDARY' &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_200};
    `}
`

export const Title = styled.Text<ButtonProps>`
  margin-left: 12px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
`
