import { styled } from '@theme'
import { __DEV__ } from '@utils/assertions'

export const StyledNav = styled('nav', {})

export const StyledList = styled('ul', {
  padding: '$0',
  margin: '$0',
  listStyle: 'none',
  display: 'inline-flex',
  gap: 'clamp($4, 4vw, $10)'
})

export const StyledItem = styled('li', {})

if (__DEV__) {
  StyledItem.displayName = '$Item'
  StyledList.displayName = '$List'
  StyledNav.displayName = '$Nav'
}
