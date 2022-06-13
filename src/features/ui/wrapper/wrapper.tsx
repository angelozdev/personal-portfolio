import { StyledWrapper, WrapperVariantsProps } from './wrapper.styles'

// types
import type { PropsWithChildren } from 'react'

function Wrapper({ children, size }: PropsWithChildren<WrapperVariantsProps>) {
  return <StyledWrapper size={size}>{children}</StyledWrapper>
}

export default Wrapper
