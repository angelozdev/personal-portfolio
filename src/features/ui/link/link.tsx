import React from 'react'
import { useLink } from '@react-aria/link'
import { mergeProps } from '@react-aria/utils'
import { StyledAnchor } from './link.styles'
import { __DEV__ } from '@utils/assertions'

// types
import type { AriaLinkProps } from '@react-types/link'
interface Props extends AriaLinkProps {
  isActive?: boolean
}

type NativeProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof Props
>

type LinkProps = NativeProps & Props

function Link(props: LinkProps) {
  const { children, isActive, ...restProps } = props
  const anchorRef = React.useRef<HTMLAnchorElement>(null)
  const { linkProps } = useLink(props, anchorRef)
  const title =
    props.title || (typeof children === 'string' ? children : undefined)

  return (
    <StyledAnchor
      title={title}
      isActive={isActive}
      ref={anchorRef}
      {...mergeProps(restProps, linkProps)}
    >
      {children}
    </StyledAnchor>
  )
}

if (__DEV__) {
  Link.displayName = 'Link'
}

export default Link
