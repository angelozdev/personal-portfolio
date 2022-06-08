export const __DEV__ = process.env.NODE_ENV !== 'production'

export function isBrowser(): boolean {
  return Boolean(
    typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
  )
}
