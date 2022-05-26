import React from 'react'
import { useSwitch } from '@react-aria/switch'
import { useToggleState } from '@react-stately/toggle'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { StyledSwitch, StyledInput, StyledSlider } from './switch.styles'

// types
import type { AriaSwitchProps } from '@react-types/switch'

function Switch(props: AriaSwitchProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const state = useToggleState(props)
  const { inputProps } = useSwitch(props, state, inputRef)
  return (
    <StyledSwitch>
      <VisuallyHidden>
        <StyledInput {...inputProps} ref={inputRef} />
      </VisuallyHidden>
      <StyledSlider
        aria-label="thumb"
        role="slider"
        isSelected={state.isSelected}
      />
    </StyledSwitch>
  )
}

export default Switch
