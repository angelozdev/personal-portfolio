import NextLink from 'next/link'
import { useRouter } from 'next/router'

// components
import { StyledItem, StyledList, StyledNav } from './navigation.styles'
import { Link } from '@features/ui/link'

// utils
import { routes } from './fixtures'

function Navigation() {
  const { pathname } = useRouter()
  return (
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
  )
}

export default Navigation
