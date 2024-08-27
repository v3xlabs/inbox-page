/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as MailIndexImport } from './routes/$mail/index'

// Create Virtual Routes

const DebugLazyImport = createFileRoute('/debug')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const DebugLazyRoute = DebugLazyImport.update({
  path: '/debug',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/debug.lazy').then((d) => d.Route))

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const MailIndexRoute = MailIndexImport.update({
  path: '/$mail/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/debug': {
      id: '/debug'
      path: '/debug'
      fullPath: '/debug'
      preLoaderRoute: typeof DebugLazyImport
      parentRoute: typeof rootRoute
    }
    '/$mail/': {
      id: '/$mail/'
      path: '/$mail'
      fullPath: '/$mail'
      preLoaderRoute: typeof MailIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  LoginRoute,
  DebugLazyRoute,
  MailIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/debug",
        "/$mail/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/debug": {
      "filePath": "debug.lazy.tsx"
    },
    "/$mail/": {
      "filePath": "$mail/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
