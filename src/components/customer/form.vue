<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.customer_name" label="Customer Name" />
      <q-input v-model="formData.contact_number" label="Contact Number" />
      <q-input v-model="formData.email" label="Email" />
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
      this.$emit('formSubmit', this.formData)
      this.formData = {}
    }
  }
}
</script>
