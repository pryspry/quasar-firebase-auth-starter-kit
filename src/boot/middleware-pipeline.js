/**
 * A stack of different middlewares ran in series
 * @link https://blog.logrocket.com/vue-middleware-pipelines/
 */
function middlewarePipeline (context, middlewares, index) {
  let middleware = middlewares[index]
  if (!middleware) return context.next
  return () => {
    let nextMiddleware = middlewarePipeline(
      context, middlewares, index + 1
    )
    middleware({ ...context, next: nextMiddleware })
  }
}

export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    if (!to.meta.middlewares) return next()
    let middlewares = to.meta.middlewares
    let context = { to, from, next, store }
    return middlewares[0]({
      ...context,
      next: middlewarePipeline(context, middlewares, 1)
    })
  })
}
