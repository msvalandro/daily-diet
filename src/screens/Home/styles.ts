import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const HomeContainer = styled(SafeAreaView)`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
`

export const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;
`
