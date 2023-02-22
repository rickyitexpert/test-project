<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.id" label="Id" />
      <q-input v-model="formData.invoice_id" label="Invoice Id" />
      <q-input v-model="formData.receipt_id" label="Receipt Id" />
      <q-input v-model="formData.amount" label="Amount" />
      <q-input v-model="formData.user_created" label="User Created" />
      <q-input v-model="formData.date_created" label="Date Created" />
      <q-input v-model="formData.user_updated" label="User Updated" />
      <q-input v-model="formData.date_updated" label="Date Updated" />
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
