<template>
  <q-page class="flex">
    <div>
      <q-card class="q-pa-md q-gutter-sm">
        <h5>Login to Proceed</h5>
        <q-input v-model="formData.email" label="Username" />
        <q-input v-model="formData.password" type="password" label="Password" />
        <div class="row q-my-md justify-center">
          <q-btn class="col" unelevated color="green" label="Login" @click="login" />
        </div>
        formData - {{ formData }}
        <br>
        Response- {{ response }}
      </q-card>
    </div>
</q-page>
</template>
<script>
export default {
  data () {
    return {
      formData: {
        mode: 'json'
      },
      response: null
    }
  },
  methods: {
    async login () {
      delete this.$api.defaults.headers.common['authorization']
      let response = await this.$api.post('https://gangotri-api.brainysoftwares.com/auth/login', this.formData)
      this.response = response.data
      this.postAuth()
      setTimeout(this.refreshToken, response.data.data.expires - 120000)
    },
    async refreshToken () {
      let self = this
      delete this.$api.defaults.headers.common['authorization']
      let response = await this.$api.post('https://gangotri-api.brainysoftwares.com/auth/refresh', { refresh_token: this.response.data.refresh_token })
        .catch((error) => {
          if (error.response.status === 401) {
            self.$router.push('/login')
          }
        })
      this.response = response.data
      this.postAuth()
      setTimeout(this.refreshToken, response.data.data.expires - 120000)
    },
    postAuth () {
      this.$api.defaults.headers.common['authorization'] = 'Bearer ' + this.response.data.access_token
      this.$q.localStorage.set('access_token', this.response.data.access_token)
      this.$q.localStorage.set('refresh_token', this.response.data.refresh_token)
    }
  }
}
</script>
