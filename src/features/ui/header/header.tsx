// components
import { Switch } from '../switch'
import { StyleContainer, StyledWrapper, StyledGrid } from './header.styles'
import { Navigation } from './navigation'

// utils
import { useTheme } from '@hooks'

function Header() {
  const { toggleTheme, type } = useTheme()
  const nextType = type === 'light' ? 'dark' : 'light'

  return (
    <StyleContainer>
      <StyledWrapper>
        <StyledGrid>
          <div>
            <span role="img">AZ</span>
          </div>
          <Navigation />
          <div role="presentation" title={`Switch to ${nextType} theme`}>
            <Switch
              isSelected={type === 'dark'}
              onClick={toggleTheme}
              aria-label={`Switch to ${nextType} theme`}
            />
          </div>
        </StyledGrid>
      </StyledWrapper>
    </StyleContainer>
  )
}

export default Header
