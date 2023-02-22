<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.id" label="Id" />
      <q-input v-model="formData.driver_name" label="Driver Name" />
      <q-input v-model="formData.address" label="Address" />
      <q-input v-model="formData.contact_no" label="Contact No" />
      <q-input v-model="formData.status" label="Status" />
    </div>
    <div class="q-py-md">
      <q-btn color="red" label="submit" @click="submitData"></q-btn>
    </div>
    <div class="q-py-md">
      <q-btn color="red" label="close" to="./"></q-btn>
    </div>
  </q-card>

</template>
<script>
export default {
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    submitData () {
      console.log('Emitting Event of submitting form with data')
      alert()
      this.$emit('formSubmit', this.formData)
      console.log('Resetting Form')
      alert()
      this.formData = {}
    }
  }
}
</script>
