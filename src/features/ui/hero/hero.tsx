import { Wrapper } from '../wrapper'
import {
  StyledContainer,
  StyledLayout,
  StyledSubtitle,
  StyledTitle
} from './hero.styles'

interface Props {
  title: string
  subtitle?: string
}

function Hero({ subtitle, title }: Props) {
  return (
    <StyledContainer>
      <Wrapper>
        <StyledLayout>
          <StyledTitle title={title}>{title}</StyledTitle>
          {subtitle && (
            <StyledSubtitle title={subtitle}>{subtitle}</StyledSubtitle>
          )}
        </StyledLayout>
      </Wrapper>
    </StyledContainer>
  )
}

export default Hero
