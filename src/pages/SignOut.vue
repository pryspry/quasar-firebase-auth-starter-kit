<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
import auth from 'src/firebase/auth'
export default {
  name: 'SignOutPage',
  created () {
    // This page is used simulate sign out. It can be removed.
    auth.signOut()
  }
}
</script>

<style>
</style>
