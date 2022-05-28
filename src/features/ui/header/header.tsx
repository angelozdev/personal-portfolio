// components
import { Switch } from '../switch'
import { StyleContainer, StyledWrapper, StyledGrid } from './header.styles'
import { Navigation } from './navigation'

export default function Header() {
  return (
    <StyleContainer>
      <StyledWrapper>
        <StyledGrid>
          <div>
            <span>AZ</span>
          </div>
          <Navigation />
          <div role="presentation" title="Switch to dark mode">
            <Switch aria-label="Switch to dark mode" />
          </div>
        </StyledGrid>
      </StyledWrapper>
    </StyleContainer>
  )
}
