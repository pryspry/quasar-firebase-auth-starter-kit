import firebase from 'src/firebase'
import Store from 'src/store'
import { start } from '../config/firebaseui'
const signOut = async () => {
  console.info('[Firebase] Sign out.')
  await firebase.auth().signOut().then(() => {
    Store().dispatch('auth/load')
    window.location.replace('/login')
    // TODO show logout successful message
  }).catch(err => console.error(err))
}
export default { start, signOut }
