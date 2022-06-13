import { styled } from '@theme'
import { __DEV__ } from '@utils/assertions'

export const StyledTitle = styled('h2', {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontSize: '3rem'
})

if (__DEV__) {
  StyledTitle.displayName = '$SectionTitle'
}
