<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.id" label="Id" />
      <q-input v-model="formData.user_created" label="User Created" />
      <q-input v-model="formData.date_created" label="Date Created" />
      <q-input v-model="formData.user_updated" label="User Updated" />
      <q-input v-model="formData.date_updated" label="Date Updated" />
      <q-input v-model="formData.item_id" label="Items Id" />
      <q-input v-model="formData.rate" label="Rate" />
      <q-input v-model="formData.quantity" label="Quantity" />
      <q-input v-model="formData.amount" label="Amount" />
      <q-input v-model="formData.tax_rate" label="Tax Rate" />
      <q-input v-model="formData.tax_amount" label="Tax Amount" />
      <q-input v-model="formData.status" label="Status" />
      <q-input v-model="formData.invoice_id" label="Invoice Id" />
      <q-input v-model="formData.description" label="Description" />
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
