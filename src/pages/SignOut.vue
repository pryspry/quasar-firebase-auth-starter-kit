<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  created () {
    // This page is used simulate sign out. It can be removed.
    this.$auth.signOut()
  }
}
</script>

<style>
</style>
