import Vue from 'vue'
/**
 * Fetch the current user from the firebase auth server.
 */
export async function fetch ({ commit }) {
  const firebase = Vue.prototype.$firebase
  console.info('[store] user/fetch')
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(async user => {
      console.info('[Firebase] Auth state changed.')
      if (user) {
        console.info('[Firebase] User found.')
        commit('authenticated', true)
        resolve(user)
      }
      resolve()
    })
  })
}
