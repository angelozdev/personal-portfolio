import { AnchorHTMLAttributes } from 'react'
import { StyledAnchor } from './link.styles'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string
  isActive?: boolean
}

export default function Link({
  children,
  isActive = false,
  ...anchorProps
}: Props) {
  return (
    <StyledAnchor title={children} isActive={isActive} {...anchorProps}>
      {children}
    </StyledAnchor>
  )
}
