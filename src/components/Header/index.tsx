import logoImg from '@assets/logo.png'

import { Avatar, HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo source={logoImg} />

      <Avatar source={{ uri: 'https://github.com/msvalandro.png' }} />
    </HeaderContainer>
  )
}
