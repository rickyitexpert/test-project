<template>
  <div class="q-pa-md">
    <div>
      <h5>Customers</h5>
    </div>

    <q-table separator="horizontal" :columns="table.columns" :rows="table.rows">

    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: {
        rows: [
          { customer_name: 'Rakesh Roshan', contact_number: '9334455066', email: 'a@a.com' },
          { customer_name: 'Ajit Kumar', contact_number: '9334455066', email: 'a@a.com' }
        ],
        columns: [
          { label: 'Customer Name', field: 'customer_name' },
          { label: 'Contact Number', field: 'contact_number' },
          { label: 'Email', field: 'email' },
        ]
      }
    }
  },
  methods: {
    insertData (data) {
      console.log('Insert data recieved')
      alert()
      this.table.rows.push(data)
      console.log('Data Inserted')
    }
  }
}

</script>
