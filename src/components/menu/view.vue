<template>
  <div class="q-pa-md">
    <div>
      <h5>menu</h5>
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
          { label: "Name", field: "name" },
          { label: "Status", field: "status" },
          { label: "Modules", field: "modules" },
          { label: "Sequence", field: "sequence" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/menu");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
