<template>
  <div class="column">
    <q-input v-model="formData.id" label="Id" />
    <q-input v-model="formData.account_name" label="Account Name" />
    <q-input v-model="formData.account_address" label="Account Address" />
    <q-input v-model="formData.contact_number" label="Contact Number" />
    <q-input v-model="formData.email" label="Email" />
    <q-input v-model="formData.city" label="City" />
    <q-input v-model="formData.state" label="State" />
    <q-input v-model="formData.pin_code" label="Pin Code" />
    <q-input v-model="formData.country" label="Country" />
    <q-input v-model="formData.account_receipts" label="Accounting Receipt" />
    <q-input v-model="formData.status" label="Status" />
    <q-input v-model="formData.user_created" label="User Created" />
    <q-input v-model="formData.date_created" label="Date Created" />
    <q-input v-model="formData.user_updated" label="User Updated" />
    <q-input v-model="formData.date_updated" label="Date Updated" />
    <q-input v-model="formData.invoices" label="Invoices" />
    <q-input v-model="formData.contacts" label="Contacts" />
    <q-input v-model="formData.log_book" label="Log Book" />
    <q-input v-model="formData.contracts" label="Contracts" />
    <q-input v-model="formData.gst" label="GST" />
  </div>
  <div class="q-py-md">
    <q-btn color="green" label="submit" @click="submitData"></q-btn>
  </div>
  <div class="q-py-md">
    <q-btn color="red" label="close" to="./"></q-btn>
</div>
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
