import '../../node_modules/firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui'
import config from '../config/firebaseui'

export default async ({ Vue, store }) => {
  const firebase = Vue.prototype.$firebase
  const ui = new firebaseui.auth.AuthUI(firebase.auth())
  const auth = {
    displaySignIn: (container = '#firebaseui-auth-container') => {
      console.info('[Firebase] UI start.')
      ui.start(container, config({ firebase: firebase }))
    },
    user: () => {
      return firebase.auth().currentUser
    },
    signOut: async () => {
      console.info('[Firebase] Sign out.')
      await firebase.auth().signOut().then(() => {
        store.dispatch('user/fetch')
        window.location.replace('/signin')
        // TODO show logout successful message
      }).catch(err => console.error(err))
    }
  }
  Vue.prototype.$auth = auth
}
