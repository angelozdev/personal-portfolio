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

export const StyledWrapper = styled('div', {
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
  fontSize: 'clamp($xs, 4vmin, $md)',
  color: '$gray800'
})

if (__DEV__) {
  StyledContainer.displayName = '$Container'
  StyledWrapper.displayName = '$Wrapper'
  StyledTitle.displayName = '$Title'
  StyledSubtitle.displayName = '$Subtitle'
}
