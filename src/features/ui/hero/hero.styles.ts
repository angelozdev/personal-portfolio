import { styled } from '@theme'
import { __DEV__ } from '@utils/assertions'

export const StyledContainer = styled('section', {
  padding: '$12 $8',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'clamp($72, 100vmin, 70vh)',
  bg: '$background'
})

export const StyledLayout = styled('div', {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4'
})

export const StyledTitle = styled('h1', {
  fontSize: 'clamp($md, 9vmin, $3xl)',
  fontWeight: '$extrabold',
  m: '$0'
})

export const StyledSubtitle = styled('h2', {
  fontWeight: '$thin',
  m: '$0',
  fontSize: 'clamp($xs, 4vmin, $sm)',
  color: '$accent5'
})

if (__DEV__) {
  StyledContainer.displayName = '$Container'
  StyledLayout.displayName = '$HeroLayout'
  StyledTitle.displayName = '$Title'
  StyledSubtitle.displayName = '$Subtitle'
}
