import styled from 'styled-components/native'

interface StatusProps {
  valid: boolean
}

export const MealCardContainer = styled.TouchableOpacity`
  height: 50px;
  padding: 0 12px;
  margin-bottom: 8px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  flex-direction: row;
  align-items: center;
`

export const Hour = styled.Text``

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  margin: 0 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Name = styled.Text`
  flex: 1;
`

export const Status = styled.View<StatusProps>`
  height: 14px;
  width: 14px;

  background-color: ${({ theme, valid }) =>
    valid ? theme.COLORS.GREEN : theme.COLORS.RED};
  border-radius: 999px;
`
