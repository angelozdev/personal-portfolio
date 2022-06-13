// components
import { Wrapper } from '../wrapper'
import { StyledTitle } from './tech-section.styles'

interface Props {
  title: string
}

function TechSection({ title }: Props) {
  return (
    <section>
      <Wrapper>
        <StyledTitle>{title}</StyledTitle>
      </Wrapper>
    </section>
  )
}

export default TechSection
