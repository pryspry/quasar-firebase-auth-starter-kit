/**
 * FirebaseUI container id.
 * @returns Firebase UI auth container id string
 */
export const container = '#firebaseui-auth-container'
/**
 * FirebaseUI configurations.
 * @returns firebase ui configuration object
 * @link https://firebase.google.com/docs/auth/web/firebaseui
 */
export const config = ({ firebase }) => ({
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none'
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'redirect',
  // signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ]
// Terms of service url.
// tosUrl: '<your-tos-url>',
// Privacy policy url.
// privacyPolicyUrl: '<your-privacy-policy-url>'
})
