import { Row } from '@components/Row'
import { useState } from 'react'

import { Dot, Label, RadioButton, RadioGroupContainer } from './styles'

interface RadioGroupProps {
  label: string
  onChange: (value: boolean) => void
  value?: boolean
}

export function RadioGroup({ label, onChange, value }: RadioGroupProps) {
  return (
    <RadioGroupContainer>
      <Label withMargin>{label}</Label>

      <Row>
        <RadioButton
          selected={value === true}
          onPress={() => onChange(true)}
          type="SUCCESS"
          style={{ marginRight: 4 }}
        >
          <Dot type="SUCCESS" />
          <Label>Sim</Label>
        </RadioButton>

        <RadioButton
          selected={value === false}
          onPress={() => onChange(false)}
          type="DANGER"
          style={{ marginLeft: 4 }}
        >
          <Dot type="DANGER" />
          <Label>Não</Label>
        </RadioButton>
      </Row>
    </RadioGroupContainer>
  )
}
