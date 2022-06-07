import { styled } from '@theme'
import { __DEV__ } from '@utils/assertions'

export const StyledAnchor = styled('a', {
  padding: '$2 0',
  display: 'inline-flex',
  textDecoration: 'none',
  transition: '$base',
  cursor: 'pointer',
  color: '$gray700',
  '&:hover': {
    color: '$gray900'
  },
  outline: 'none',
  variants: {
    isActive: {
      true: {
        fontWeight: '$medium',
        color: '$blue500',
        '&:hover': {
          color: '$blue700'
        }
      }
    }
  }
})

if (__DEV__) {
  StyledAnchor.displayName = '$Anchor'
}
