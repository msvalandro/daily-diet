import styled, { css } from 'styled-components/native'

export const RadioGroupContainer = styled.View``

interface LabelProps {
  withMargin?: boolean
}

export const Label = styled.Text<LabelProps>`
  margin-bottom: ${({ withMargin }) => (withMargin ? 8 : 0)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`

export type RadioButtonTypeStyleProps = 'SUCCESS' | 'DANGER'

interface RadioButtoProps {
  type: RadioButtonTypeStyleProps
  selected?: boolean
}

export const RadioButton = styled.TouchableOpacity<RadioButtoProps>`
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
  border: 1px solid transparent;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme, selected, type }) =>
    selected &&
    css`
      background-color: ${type === 'SUCCESS'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
      border-color: ${type === 'SUCCESS'
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK};
    `}
`

export const Dot = styled.View<RadioButtoProps>`
  height: 8px;
  width: 8px;
  margin-right: 8px;

  background-color: ${({ theme, type }) =>
    type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 999px;
`
