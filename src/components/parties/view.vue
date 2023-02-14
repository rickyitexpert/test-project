<template>
  <div class="q-pa-md">
    <div>
      <h5>Parties</h5>
    </div>

    <q-table separator="horizontal" :columns="table.columns" :rows="filteredRows">
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
          { label: 'Member Card', field: 'member_card' },
          { label: 'Aadhar', field: 'aadhar_number' },
          { label: 'First Name', field: (row) => row.user_id.first_name },
          { label: 'Mobile Number', field: (row) => row.user_id.mobile_number, name: 'mobile_number' },
        ]
      }
    }
  },
  computed: {
    filteredRows () {
      return this.table.rows.filter((row) => {
        return row.user_id.first_name ? true : false
      })

    }
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data)
    },
    async fetchData () {
      let response = await this.$axios.get('https://dhairya-api.brainysoftwares.com/items/parties?fields=*.*')
      this.table.rows = response.data.data
    }

  },
  created () {
    this.fetchData()
  }
}

</script>
