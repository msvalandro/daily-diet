import { Button } from '@components/Button'
import { RadioGroup } from '@components/RadioGroup'
import { Row } from '@components/Row'
import { useNavigation } from '@react-navigation/native'

import {
  BackIcon,
  Form,
  Input,
  InputContainer,
  Label,
  RegisterContainer,
  RegisterHeader,
  Title,
  TitleContainer,
} from './styles'

export function Register() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleRegisterMeal() {
    navigation.navigate('finished', { valid: true })
  }

  return (
    <RegisterContainer>
      <RegisterHeader onPress={handleGoBack}>
        <TitleContainer>
          <BackIcon />

          <Title>Nova refeição</Title>
        </TitleContainer>
      </RegisterHeader>

      <Form>
        <InputContainer>
          <Label>Nome</Label>
          <Input />
        </InputContainer>

        <InputContainer>
          <Label>Descrição</Label>
          <Input />
        </InputContainer>

        <Row>
          <InputContainer fromRow style={{ marginRight: 10 }}>
            <Label>Data</Label>
            <Input />
          </InputContainer>

          <InputContainer fromRow style={{ marginLeft: 10 }}>
            <Label>Hora</Label>
            <Input />
          </InputContainer>
        </Row>

        <RadioGroup label="Está dentro da dieta?" />

        <Button
          style={{ marginTop: 'auto', marginBottom: 80 }}
          title="Cadastrar refeição"
          onPress={handleRegisterMeal}
        />
      </Form>
    </RegisterContainer>
  )
}
