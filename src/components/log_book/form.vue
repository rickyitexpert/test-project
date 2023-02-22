<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.id" label="Id" />
      <q-input v-model="formData.account_id" label="Account Id" />
      <q-input v-model="formData.contact_id" label="Contact Id" />
      <q-input v-model="formData.vehicle_id" label="Vehicle Id" />
      <q-input v-model="formData.driver_id" label="Driver Id" />
      <q-input v-model="formData.contract_id" label="Contract Id" />
      <q-input v-model="formData.log_type" label="Log Type" />
      <q-input v-model="formData.data_form" label="Data Form" />
      <q-input v-model="formData.data_to" label="Data To" />
      <q-input v-model="formData.log_type" label="Log Type" />
      <q-input v-model="formData.user_created" label="User Created" />
      <q-input v-model="formData.data_created" label="Data Created" />
      <q-input v-model="formData.user_updated" label="User Updated" />
      <q-input v-model="formData.date_updated" label="Data Updated" />
      <q-input v-model="formData.organisation_id" label="Organisation Id" />
      <q-input v-model="formData.period" label="Period" />
      <q-input v-model="formData.bank_id" label="Bank Id" />
      <q-input v-model="formData.booked_by" label="Booked By" />
      <q-input v-model="formData.oncall_plan" label="Oncall Plan" />
      <q-input v-model="formData.vehicle_no" label="Vehicle No" />
      <q-input v-model="formData.log_type" label="Log Type" />
      <q-input v-model="formData.journey_date" label="Journey Date" />
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
