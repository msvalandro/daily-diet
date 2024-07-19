import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.Image`
  height: 37px;
  width: 82px;
`

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 999px;
`
