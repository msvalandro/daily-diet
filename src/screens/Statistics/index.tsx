import { Highlight } from '@components/Highlight'
import { useNavigation } from '@react-navigation/native'

import {
  BackIcon,
  Content,
  StatisticsContainer,
  StatisticsHeader,
  Title,
} from './styles'

export function Statistics() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <StatisticsContainer>
      <StatisticsHeader onPress={handleGoBack}>
        <BackIcon />
        <Highlight title="90.86%" subtitle="das refeições dentro da dieta" />
      </StatisticsHeader>

      <Content>
        <Title>Estatísticas gerais</Title>
      </Content>
    </StatisticsContainer>
  )
}
