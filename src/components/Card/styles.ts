import styled from 'styled-components/native'

export type CardTypeStyleProps = 'SUCCESS' | 'DANGER' | 'DEFAULT'

interface CardContainerProps {
  type: CardTypeStyleProps
}

export const CardContainer = styled.View<CardContainerProps>`
  height: 102px;

  background-color: ${({ theme, type }) =>
    type === 'SUCCESS'
      ? theme.COLORS.GREEN_LIGHT
      : type === 'DANGER'
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_600};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`
