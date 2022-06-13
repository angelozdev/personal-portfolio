// components
import { Switch } from '../switch'
import { Navigation } from './navigation'
import { Wrapper } from '../wrapper'
import { StyleContainer, StyledGrid } from './header.styles'

// utils
import { useTheme } from '@hooks'

function Header() {
  const { toggleTheme, type } = useTheme()
  const nextType = type === 'light' ? 'dark' : 'light'

  return (
    <StyleContainer>
      <Wrapper>
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
      </Wrapper>
    </StyleContainer>
  )
}

export default Header
