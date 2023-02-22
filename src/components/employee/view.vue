<template>
  <div class="q-pa-md">
    <div>
      <h5>Employee details</h5>
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
        rows: [],
        columns: [
          { label: 'Member Card', field: 'id' },
          { label: 'First Name', field: 'firstName' },
          { label: 'Email', field: 'email' },
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data)
    },
    async fetchData () {
      let response = await this.$api.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
      this.table.rows = response.data;
    }


  },
  created () {
    this.fetchData()
  }
}
</script>
