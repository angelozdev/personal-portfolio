import React from 'react'
import { useLink } from '@react-aria/link'
import { StyledAnchor } from './link.styles'

// types
import type { AriaLinkProps } from '@react-types/link'
interface Props extends AriaLinkProps {
  children: string
  isActive?: boolean
}

function Link(props: Props) {
  const { children, isActive } = props
  const anchorRef = React.useRef<HTMLAnchorElement>(null)
  const { linkProps } = useLink(props, anchorRef)
  return (
    <StyledAnchor
      {...linkProps}
      title={children}
      isActive={isActive}
      ref={anchorRef}
    >
      {children}
    </StyledAnchor>
  )
}

export default Link
