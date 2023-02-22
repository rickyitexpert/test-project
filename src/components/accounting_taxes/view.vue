<template>
  <div class="q-pa-md">
    <div>
      <h5>accounting_taxes</h5>
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
          { label: "Tax Name", field: "tax_name" },
          { label: "Tax Rate", field: "tax_rate" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/accounting_taxes");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
