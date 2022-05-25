import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { Link } from '../link'
import { routes } from './fixtures'
import {
  StyleContainer,
  StyledWrapper,
  StyledGrid,
  StyledNav,
  StyledList,
  StyledItem
} from './header.styles'

export default function Header() {
  const { pathname } = useRouter()
  return (
    <StyleContainer>
      <StyledWrapper>
        <StyledGrid>
          <div>
            <span>AZ</span>
          </div>
          <StyledNav>
            <StyledList>
              {routes.map(({ name, path }) => (
                <StyledItem key={name}>
                  <NextLink passHref href={path}>
                    <Link isActive={pathname === path}>{name}</Link>
                  </NextLink>
                </StyledItem>
              ))}
            </StyledList>
          </StyledNav>
          <div>3</div>
        </StyledGrid>
      </StyledWrapper>
    </StyleContainer>
  )
}
