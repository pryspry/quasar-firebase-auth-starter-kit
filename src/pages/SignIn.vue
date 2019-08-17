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
export default {
  computed: {
    authenticated () { return this.$store.getters['user/authenticated'] }
  },
  watch: {
    authenticated () { if (this.authenticated) this.$router.push('/dashboard') }
  },
  created () {
    Loading.show({ message: 'Checking for user...' })
    this.$store.dispatch('user/fetch').then(() => {
      Loading.hide()
    })
  },
  mounted () {
    this.$auth.start()
  }
}
</script>

<style>
</style>
