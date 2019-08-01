/**
 * Auth middleware example
 */
export function auth ({ next, store }) {
  console.info('[middleware] auth')
  // Simply checks the auth/user state. If no user, proceed to login.
  // On login page, use onAuthStateChanged method once to retrieve
  // user credential and commit setUser.
  if (!store.getters['auth/user']) return next('/login')
  return next()
}
