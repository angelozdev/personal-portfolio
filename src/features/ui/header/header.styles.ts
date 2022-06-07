import { styled } from '@theme'
import { __DEV__ } from '@utils/assertions'

export const StyledWrapper = styled('div', {
  p: '$8',
  maxWidth: '$bp$md',
  mx: 'auto'
})

export const StyleContainer = styled('header', {
  bg: '$background',
  borderBottom: '$space$px solid',
  borderColor: '$gray200',
  position: 'sticky',
  top: 0
})

export const StyledGrid = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$4'
})

if (__DEV__) {
  StyleContainer.displayName = '$HeaderContainer'
  StyledGrid.displayName = '$HeaderGrid'
  StyledWrapper.displayName = '$HeaderWrapper'
}
