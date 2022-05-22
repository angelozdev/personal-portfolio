import postcss, { AcceptedPlugin } from 'postcss'
import postcssPresetEnv from 'postcss-preset-env'
import { getCssText } from '@theme'

export async function transformCSS() {
  const cssFromStitches = getCssText()

  const plugins = [
    postcssPresetEnv({
      browsers: 'last 20 versions'
    })
  ] as AcceptedPlugin[]

  const { css } = await postcss(plugins).process(cssFromStitches, {
    from: undefined
  })
  return css
}
