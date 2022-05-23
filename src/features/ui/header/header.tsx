import Image from 'next/image'
import { StyleContainer, StyledWrapper, StyledGrid } from './header.styles'

export default function Header() {
  return (
    <StyleContainer>
      <StyledWrapper>
        <StyledGrid>
          <div>
            <span>AZ</span>
          </div>
          <div>2</div>
          <div>3</div>
        </StyledGrid>
      </StyledWrapper>
    </StyleContainer>
  )
}
