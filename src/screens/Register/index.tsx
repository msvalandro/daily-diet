import { Button } from '@components/Button'
import { RadioGroup } from '@components/RadioGroup'
import { Row } from '@components/Row'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

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

const registerMealSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  date: yup
    .string()
    .matches(/\b(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})\b/)
    .required(),
  hour: yup
    .string()
    .matches(/\b([01][0-9]|2[0-3]):([0-5][0-9])\b/)
    .required(),
  valid: yup.boolean().required(),
})

export function Register() {
  const { control, handleSubmit } = useForm<FormDataProps>({
    resolver: yupResolver(registerMealSchema),
  })

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
              <Input
                placeholder="ex: Acarajé"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </InputContainer>

        <InputContainer>
          <Label>Descrição</Label>
          <Controller
            control={control}
            name="description"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="ex: Bolinho de acarajé na praia de Salvador"
                value={value}
                onChangeText={onChange}
              />
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
                <Input
                  placeholder="ex: 17/12/2024"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </InputContainer>

          <InputContainer fromRow style={{ marginLeft: 10 }}>
            <Label>Hora</Label>
            <Controller
              control={control}
              name="hour"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="ex: 16:20"
                  value={value}
                  onChangeText={onChange}
                />
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
