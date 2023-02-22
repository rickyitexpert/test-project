<template><router-view /></template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      response: null
    }
  },
  methods: {
    async refreshToken () {
      delete this.$api.defaults.headers.common['authorization']
      let response = await this.$api.post('https://gangotri-api.brainysoftwares.com/auth/refresh', { refresh_token: this.response.data.refresh_token })
        .catch((error) => {
          if (error.response.status === 401) {
            self.$router.push('/login')
          }
        })
      this.response = response.data
      this.postAuth()
      setTimeout(this.refreshToken, this.response?.data?.expires ? this.response.data.expires - 120000 : 3000)
    },
    postAuth () {
      this.$api.defaults.headers.common['authorization'] = 'Bearer ' + this.response.data.access_token
      this.$q.localStorage.set('access_token', this.response.data.access_token)
      this.$q.localStorage.set('refresh_token', this.response.data.refresh_token)
    }
  },
  created () {
    let token = this.$q.localStorage.getItem('access_token')
    let refresh_token = this.$q.localStorage.getItem('refresh_token')
    if (token !== null && token !== undefined) {
      this.response = { data: { access_token: token, refresh_token } }
      this.$api.defaults.headers.common['authorization'] = 'Bearer ' + token
      setTimeout(this.refreshToken, this.response?.data?.expires ? this.response.data.expires - 120000 : 3000)
    }

  }
})
</script>
