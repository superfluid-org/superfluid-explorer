import { NextRouter } from 'next/router'

export const isDynamicRoute = (router: NextRouter) =>
  /\[.+\]/.test(router.route)
