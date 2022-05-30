import React from 'react'
import { useSwitch } from '@react-aria/switch'
import { useToggleState } from '@react-stately/toggle'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { mergeProps } from '@react-aria/utils'

// components
import {
  StyledSwitch,
  StyledSlider,
  SwitchVariantsProps
} from './switch.styles'

// types
import type { AriaSwitchProps } from '@react-types/switch'

interface Props extends AriaSwitchProps {}

type NativeAttrs = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof Props
>

type SwitchProps = NativeAttrs & Props & SwitchVariantsProps

function Switch(props: SwitchProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const state = useToggleState(props)
  const { inputProps } = useSwitch(props, state, inputRef)

  return (
    <StyledSwitch>
      <VisuallyHidden>
        <input {...mergeProps(props, inputProps)} ref={inputRef} />
      </VisuallyHidden>
      <StyledSlider
        color={props.color}
        isSelected={state.isSelected}
        aria-hidden={true}
      />
    </StyledSwitch>
  )
}

export default Switch
