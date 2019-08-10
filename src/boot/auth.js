import '../../node_modules/firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui'
import { container as uiContainer, config as uiConfig } from '../config/firebaseui'

export default async ({ Vue, store, app }) => {
  const ui = new firebaseui.auth.AuthUI(app.firebase.auth())
  const auth = {
    start: () => {
      console.info('[Firebase] UI start.')
      ui.start(uiContainer, uiConfig({ firebase: app.firebase }))
    },
    user: () => {
      return store.getters['auth/user']
    },
    signOut: async () => {
      console.info('[Firebase] Sign out.')
      await app.firebase.auth().signOut().then(() => {
        store.dispatch('auth/load')
        window.location.replace('/signin')
        // TODO show logout successful message
      }).catch(err => console.error(err))
    }
  }
  Vue.prototype.$auth = auth
}
