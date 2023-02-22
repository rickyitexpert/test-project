<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.account_id" label="Id" />
      <q-input v-model="formData.item_name" label="Item Name" />
      <q-input v-model="formData.item_type" label="Item Type" />
      <q-input v-model="formData.grand_status" label="Status" />
      <q-input v-model="formData.user_created" label="User Created" />
      <q-input v-model="formData.data_created" label="Data Created" />
      <q-input v-model="formData.user_updated" label="User Updated" />
      <q-input v-model="formData.date_updated" label="Data Updated" />
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
