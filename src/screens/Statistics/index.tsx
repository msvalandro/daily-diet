import { Highlight } from '@components/Highlight'
import { Row } from '@components/Row'
import { useNavigation } from '@react-navigation/native'

import {
  BackIcon,
  Content,
  StatisticsCard,
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

        <StatisticsCard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <StatisticsCard title="109" subtitle="refeições registradas" />

        <Row>
          <StatisticsCard
            fromRow
            isFirst
            type="SUCCESS"
            title="99"
            subtitle="refeições dentro da dieta"
          />
          <StatisticsCard
            fromRow
            type="DANGER"
            title="10"
            subtitle="refeições fora da dieta"
          />
        </Row>
      </Content>
    </StatisticsContainer>
  )
}
