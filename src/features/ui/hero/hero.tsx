import {
  StyledContainer,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper
} from './hero.styles'

interface Props {
  title: string
  subtitle?: string
}

function Hero({ subtitle, title }: Props) {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitle title={title}>{title}</StyledTitle>
        {subtitle && (
          <StyledSubtitle title={subtitle}>{subtitle}</StyledSubtitle>
        )}
      </StyledWrapper>
    </StyledContainer>
  )
}

export default Hero
