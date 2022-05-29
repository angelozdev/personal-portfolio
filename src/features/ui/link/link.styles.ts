import { styled } from '@theme'

export const StyledAnchor = styled('a', {
  color: '$text',
  padding: '$2 0',
  display: 'inline-flex',
  textDecoration: 'none',
  transition: '$base',
  cursor: 'pointer',
  variants: {
    isActive: {
      true: {
        color: '$gray900'
      }
    }
  },
  '&:hover': {
    color: '$gray900'
  }
})

StyledAnchor.displayName = '$Anchor'
