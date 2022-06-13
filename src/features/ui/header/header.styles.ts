import { styled } from '@theme'
import { __DEV__ } from '@utils/assertions'

export const StyleContainer = styled('header', {
  borderBottom: '$space$px solid',
  borderColor: '$accent1',
  position: 'sticky',
  top: 0,
  bg: '$background'
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
}
