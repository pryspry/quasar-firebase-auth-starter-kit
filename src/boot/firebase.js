import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../firebase.config'

firebase.initializeApp(firebaseConfig)

export default ({ Vue, app }) => {
  app.firebase = firebase
  Vue.prototype.$firebase = firebase
}
