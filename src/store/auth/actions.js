import firebase from 'src/firebase'

export async function load ({ commit }) {
  console.info('[store] auth/load')
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(async user => {
      console.info('[Firebase] Auth state changed.')
      if (user) {
        let payload = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          token: await user.getIdToken()
        }
        commit('setUser', payload)
        console.info('[Firebase] User found.')
        resolve(payload)
      }
      resolve()
    })
  })
}
