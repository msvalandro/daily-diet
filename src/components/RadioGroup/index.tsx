import { Row } from '@components/Row'
import { useState } from 'react'

import { Dot, Label, RadioButton, RadioGroupContainer } from './styles'

interface RadioGroupProps {
  label: string
}

export function RadioGroup({ label }: RadioGroupProps) {
  const [value, setValue] = useState<boolean>()

  return (
    <RadioGroupContainer>
      <Label withMargin>{label}</Label>

      <Row>
        <RadioButton
          selected={value === true}
          onPress={() => setValue(true)}
          type="SUCCESS"
          style={{ marginRight: 4 }}
        >
          <Dot type="SUCCESS" />
          <Label>Sim</Label>
        </RadioButton>

        <RadioButton
          selected={value === false}
          onPress={() => setValue(false)}
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
