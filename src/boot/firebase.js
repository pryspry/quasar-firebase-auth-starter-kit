import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../firebase.config'

export default ({ Vue }) => {
  firebase.initializeApp(firebaseConfig)
  Vue.prototype.$firebase = firebase
}
