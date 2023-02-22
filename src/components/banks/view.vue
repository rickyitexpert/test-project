<template>
  <div class="q-pa-md">
    <div>
      <h5>banks</h5>
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
          { label: "Sort", field: "sort" },
          { label: "Bank Name", field: "bank_name" },
          { label: "Account Name", field: "account_name" },
          { label: "Account No", field: "account_no" },
          { label: "Ifsc", field: "ifsc" },
          { label: "Branch", field: "branch" },
          { label: "Organisation Id", field: "Organisation_id" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/banks")
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
}
</script>
