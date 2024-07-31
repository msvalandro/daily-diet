import { HighlightContainer, Subtitle, Title } from './styles'

interface HighlightProps {
  title: string | number
  subtitle: string
}

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <HighlightContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HighlightContainer>
  )
}
