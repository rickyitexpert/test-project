<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  created () {
    let token = this.$q.localStorage.getItem('access_token')
    if (token !== null && token !== undefined) {
      this.$axios.defaults.headers.common['authorization'] = 'Bearer ' + token
    }

  }
})
</script>
