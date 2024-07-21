import { ViewProps } from 'react-native'

import { RowContainer } from './styles'

interface RowProps extends ViewProps {}

export function Row({ children, ...rest }: RowProps) {
  return <RowContainer {...rest}>{children}</RowContainer>
}
