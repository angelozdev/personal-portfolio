import type { UrlObject } from 'url'
type Url = string | UrlObject
type Route = { path: Url; name: string }

export const routes: Route[] = [
  {
    path: '/',
    name: 'About'
  },
  {
    path: '/skills',
    name: 'Skills'
  },
  {
    path: '/projects',
    name: 'Projects'
  }
]
