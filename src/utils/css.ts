import postcss, { AcceptedPlugin } from 'postcss'
import postcssPresetEnv from 'postcss-preset-env'

export async function processCSS(cssText: string) {
  const plugins = [
    postcssPresetEnv({
      browsers: 'last 20 versions'
    })
  ] as AcceptedPlugin[]

  const { css } = await postcss(plugins).process(cssText, {
    from: undefined
  })
  return css
}
