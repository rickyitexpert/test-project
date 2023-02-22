<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.id" label="Id" />
      <q-input v-model="formData.name" label="Name" />
      <q-input v-model="formData.account" label="Account" />
      <q-input v-model="formData.vehicle_type" label="Vehicle Type" />
      <q-input v-model="formData.rent_per_month" label="Rent per Month" />
      <q-input v-model="formData.fuel" label="fuel" />
      <q-input v-model="formData.date_created" label="Date Created" />
      <q-input v-model="formData.date_updated" label="Date Updated" />
      <q-input v-model="formData.log_book" label="Log Book" />
      <q-input v-model="formData.is_tax_included" label="Is Tax Included" />
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
