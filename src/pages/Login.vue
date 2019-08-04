<template>
  <keep-alive>
    <q-page class="flex flex-center">
      <div id="firebaseui-auth-container"></div>
      <div id="loader">
        <q-spinner
          color="grey-5"
          size="3em"
        />
      </div>
    </q-page>
  </keep-alive>
</template>

<script>
import { Loading } from 'quasar'
import auth from 'src/firebase/auth'
export default {
  computed: {
    user () { return this.$store.getters['auth/user'] }
  },
  watch: {
    user () { if (this.user) this.$router.push('/dashboard') }
  },
  created () {
    Loading.show({ message: 'Checking for user...' })
    this.$store.dispatch('auth/load').then(user => {
      Loading.hide()
    })
  },
  mounted () {
    if (this.user) this.$router.push('/dashboard')
    else auth.start()
  }
}
</script>

<style>
</style>
