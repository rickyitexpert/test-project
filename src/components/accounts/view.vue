<template>
  <div class="q-pa-md">
    <div>
      <h5>Accounts</h5>
    </div>

    <q-table separator="horizontal" :columns="table.columns" :rows="table.rows">
      <template v-slot:body-cell-mobile_number="props">
        <q-td>
          <q-btn v-if="props.value" flat icon="phone" color="primary" type="a" :label="props.value"
            :href="'tel:' + props.value"></q-btn>
        </q-td>

      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: {
        rows: [

        ],
        columns: [
          { label: 'ID', field: 'id' },
          { label: 'Name', field: 'account_name' },
          { label: 'Address', field: 'account_address' },
          { label: 'Contact Number', field: 'contact_number' },
          { label: 'Email', field: 'email' },
          { label: '', field: '' },
          { label: '', field: '' },
          { label: '', field: '' },
          { label: '', field: '' },
          { label: '', field: '' },
          { label: '', field: '' },
          { label: '', field: '' },
          { label: '', field: '' },
          { label: '', field: '' }
        ]
      }
    }
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data)
    },
    async fetchData () {
      let response = await this.$axios.get('https://gangotri-api.brainysoftwares.com/items/accounts?fields=*.*')
      this.table.rows = response.data.data
    }

  },
  created () {
    this.fetchData()
  }
}

</script>
