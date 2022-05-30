import { styled } from '@theme'

export const StyledAnchor = styled('a', {
  padding: '$2 0',
  display: 'inline-flex',
  textDecoration: 'none',
  transition: '$base',
  cursor: 'pointer',
  color: '$gray800',
  '&:hover': {
    color: '$gray900'
  },
  variants: {
    isActive: {
      true: {
        fontWeight: '$medium',
        color: '$blue600',
        '&:hover': {
          color: '$blue700'
        }
      }
    }
  }
})

StyledAnchor.displayName = '$Anchor'
