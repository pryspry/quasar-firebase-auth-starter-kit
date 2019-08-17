/**
 * Auth middleware example
 */
export function auth ({ next, store }) {
  console.info('[middleware] auth')
  // Simply checks the user/authenticated state. If false, proceed to signin.
  // On signin page, use onAuthStateChanged method once to retrieve user
  // credential and commit user/authenticated.
  // TODO return URL
  if (!store.getters['user/authenticated']) return next('/signin')
  return next()
}
