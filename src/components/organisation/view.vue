<template>
  <div class="q-pa-md">
    <div>
      <h5>organisation</h5>
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
          { label: "Organisation Name", field: "organisation_name" },
          { label: "Prefix", field: "prefix" },
          { label: "Address", field: "address" },
          { label: "Email", field: "email" },
          { label: "City", field: "city" },
          { label: "State", field: "state" },
          { label: "Pin Code", field: "pin_code" },
          { label: "Country", field: "country" },
          { label: "Contact Number", field: "contact_number" },
          { label: "Pan No", field: "pan_no" },
          { label: "User Created", field: "user_created" },
          { label: "User Updated", field: "user_updated" },
          { label: "Data Created", field: "data_created" },
          { label: "Data Updated", field: "data_updated" },
          { label: "Invoices", field: "invoices" },
          { label: "Status", field: "status" },
          { label: "Banks", field: "banks" },
          { label: "GST Number", field: "gst_number" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/organisation");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
