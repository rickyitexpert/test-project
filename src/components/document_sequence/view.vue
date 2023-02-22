<template>
  <div class="q-pa-md">
    <div>
      <h5>document_sequence</h5>
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
          { label: "Date Created", field: "date_created" },
          { label: "Organisation Id", field: "organisation_id" },
          { label: "Document Type", field: "document_type" },
          { label: "Sequence No", field: "sequence_no" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/document_sequence");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
