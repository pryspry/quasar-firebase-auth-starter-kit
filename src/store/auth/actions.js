import Vue from 'vue'
export async function fetch ({ commit }) {
  const firebase = Vue.prototype.$firebase
  console.info('[store] auth/fetch')
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(async user => {
      console.info('[Firebase] Auth state changed.')
      if (user) {
        let payload = {
          id: user.uid,
          name: user.displayName,
          avatar: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          token: await user.getIdToken(),
          refreshToken: user.refreshToken,
          providerId: user.providerId,
          metadata: user.metadata,
          isAnonymous: user.isAnonymous
        }
        commit('setUser', payload)
        console.info('[Firebase] User found.')
        resolve(payload)
      }
      resolve()
    })
  })
}
