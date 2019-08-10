export async function fetch ({ commit }, app) {
  let firebase = app.$firebase
  console.info('[store] auth/fetch')
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
