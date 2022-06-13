import { styled, VariantProps } from '@theme'
import { __DEV__ } from '@utils/assertions'

export const StyledWrapper = styled('div', {
  p: '$8',
  maxWidth: '$bp$md',
  mx: 'auto',
  variants: {
    size: {
      xs: { maxWidth: '$bp$xs' },
      sm: { maxWidth: '$bp$sm' },
      md: { maxWidth: '$bp$md' },
      lg: { maxWidth: '$bp$lg' },
      xl: { maxWidth: '$bp$xl' }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type WrapperVariantsProps = VariantProps<typeof StyledWrapper>

if (__DEV__) {
  StyledWrapper.displayName = '$Wrapper'
}
