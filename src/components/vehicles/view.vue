<template>
  <div class="q-pa-md">
    <div>
      <h5>vehicles</h5>
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
          { label: "Vehicle No", field: "vehicle_no" },
          { label: "Vehicle Type", field: "vehicle_type" },
          { label: "Sort", field: "sort" },
          { label: "Status", field: "status" },
          { label: "Fuel Avg", field: "fuel avg" },
          { label: "Log Book", field: "log_book" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/vehicles");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
