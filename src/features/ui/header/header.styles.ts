import { styled } from '@theme'
import { __DEV__ } from '@utils/assetions'

export const StyledWrapper = styled('div', {
  p: '$8',
  maxWidth: '$bp$md',
  mx: 'auto'
})

export const StyleContainer = styled('header', {
  bg: '$white',
  borderBottom: '1px solid $gray300',
  position: 'sticky',
  top: 0
})

export const StyledGrid = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$4'
})

export const StyledNav = styled('nav', {})

export const StyledList = styled('ul', {
  padding: '$0',
  margin: '$0',
  listStyle: 'none',
  display: 'inline-flex',
  gap: 'clamp($4, 2vw, $12)'
})

export const StyledItem = styled('li', {})

if (__DEV__) {
  StyleContainer.displayName = '$HeaderContainer'
  StyledGrid.displayName = '$HeaderGrid'
  StyledItem.displayName = '$Item'
  StyledList.displayName = '$List'
  StyledNav.displayName = '$Nav'
  StyledWrapper.displayName = '$HeaderWrapper'
}
