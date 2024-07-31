import { Button } from '@components/Button'
import { RadioGroup } from '@components/RadioGroup'
import { Row } from '@components/Row'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'

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

interface FormDataProps {
  name: string
  description: string
  date: string
  hour: string
  valid: boolean
}

export function Register() {
  const { control, handleSubmit } = useForm<FormDataProps>()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  function handleRegisterMeal(data: FormDataProps) {
    console.log(data)
    // navigation.navigate('finished', { valid: true })
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
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input value={value} onChangeText={onChange} />
            )}
          />
        </InputContainer>

        <InputContainer>
          <Label>Descrição</Label>
          <Controller
            control={control}
            name="description"
            render={({ field: { value, onChange } }) => (
              <Input value={value} onChangeText={onChange} />
            )}
          />
        </InputContainer>

        <Row>
          <InputContainer fromRow style={{ marginRight: 10 }}>
            <Label>Data</Label>
            <Controller
              control={control}
              name="date"
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChangeText={onChange} />
              )}
            />
          </InputContainer>

          <InputContainer fromRow style={{ marginLeft: 10 }}>
            <Label>Hora</Label>
            <Controller
              control={control}
              name="hour"
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChangeText={onChange} />
              )}
            />
          </InputContainer>
        </Row>

        <Controller
          control={control}
          name="valid"
          render={({ field: { value, onChange } }) => (
            <RadioGroup
              label="Está dentro da dieta?"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Button
          style={{ marginTop: 'auto', marginBottom: 80 }}
          title="Cadastrar refeição"
          onPress={handleSubmit(handleRegisterMeal)}
        />
      </Form>
    </RegisterContainer>
  )
}
