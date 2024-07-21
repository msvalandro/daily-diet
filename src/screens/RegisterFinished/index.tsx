import feedbackInvalid from '@assets/feedback-invalid.png'
import feedbackValid from '@assets/feedback-valid.png'
import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
  FeedbackImage,
  RegisterFinishedContainer,
  Strong,
  Subtitle,
  Title,
} from './styles'

interface RouteParams {
  valid: boolean
}

export function RegisterFinished() {
  const route = useRoute()
  const { valid } = route.params as RouteParams

  const navigation = useNavigation()

  function handleGoToHome() {
    navigation.navigate('home')
  }

  return (
    <RegisterFinishedContainer>
      <Title type={valid ? 'SUCCESS' : 'DANGER'}>
        {valid ? 'Continue assim!' : 'Que pena!'}
      </Title>

      {valid ? (
        <Subtitle>
          Você continua <Strong>dentro da dieta</Strong>. Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
          esforçando e não desista!
        </Subtitle>
      )}

      <FeedbackImage source={valid ? feedbackValid : feedbackInvalid} />

      <Button
        title="Ir para a página inicial"
        style={{ width: 191 }}
        onPress={handleGoToHome}
      />
    </RegisterFinishedContainer>
  )
}
