<template>
  <div class="q-pa-md">
    <div>
      <h5>contacts</h5>
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
          { label: "Id", field: "id" },
          { label: "Account Id", field: "account_id" },
          { label: "Designation", field: "designation" },
          { label: "Name", field: "name" },
          { label: "Status", field: "status" },
          { label: "Sort", field: "sort" },
          { label: "Data Created", field: "data_created" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/contacts");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
