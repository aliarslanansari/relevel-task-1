// import { RedirectTo } from './components/RedirectTo'
import { Redirect } from 'react-router'
import lazyLoader from './utils/lazyLoader'

interface RouteItem {
  render: (props: any) => JSX.Element
  path: string
  exact?: boolean
  isProtected?: boolean
}
export interface RouteConfig {
  [key: string]: RouteItem
}

export const routeConfig: RouteConfig = {
  signup: {
    render: lazyLoader(() => import('./containers/SignupPage')),
    exact: true,
    path: '/signup',
  },
  login: {
    render: lazyLoader(() => import('./containers/LoginPage')),
    exact: true,
    path: '/login',
  },
  homepage: {
    render: () => <Redirect to='/signup' />,
    exact: true,
    path: '/',
  },
  notFound: {
    render: () => <Redirect to='/signup' />,
    exact: true,
    path: '/*',
  },
}
