<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.id" label="Id" />
      <q-input v-model="formData.sort" label="Sort" />
      <q-input v-model="formData.bank_name" label="Bank Name" />
      <q-input v-model="formData.account_name" label="Account Name" />
      <q-input v-model="formData.account_no" label="Account No" />
      <q-input v-model="formData.ifsc" label="Ifsc" />
      <q-input v-model="formData.branch" label="Branch" />
      <q-input v-model="formData.organisation_id" label="Organisation Id" />
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
