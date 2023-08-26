<template>
  <q-form ref="form">
    <q-input v-model="inputValue" :rules="[validation]"></q-input>

  </q-form>
  <q-btn label="Validate" @click="checkValidation"></q-btn>
</template>
<script>
export default {
  data () {
    return {
      inputValue: null
    }

  },
  watch: {
    inputValue (val) {
      this.inputValue = val.toUpperCase()
    }
  },
  methods: {
    async checkValidation () {
      let validationResult = await this.$refs.form.validate()
      console.log(validationResult)
    },
    validation (value) {
      console.log('validating')
      let error = 0
      if (!(value?.length < 6)) {
        error++

      }
      if (!(['rakes', 'rohit', 'pujal'].indexOf(value) > -1)) {
        error++
      }

      if (error > 1) {
        return 'Error Occured'
      }
    }
  },
  mounted () {
    console.log(this.$refs.input)
  }
}
</script>
