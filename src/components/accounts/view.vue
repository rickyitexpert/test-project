<template>
  <div class="q-pa-md">
    <div>
      <h5>accounts</h5>
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
          { label: "Account id", field: "id" },
          { label: "Account name", field: "account_name" },
          { label: "Account Address", field: "account_address" },
          { label: "Email", field: "email" },
          { label: "City", field: "city" },
          { label: "State", field: "state" },
          { label: "Pin Code", field: "pin_code" },
          { label: "Country", field: "country" },
          { label: "Accounting_receipts", field: "accounting_receipts" },
          { label: "Status", field: "status" },
          { label: "User Created", field: "user_created" },
          { label: "User Updated", field: "user_updated" },
          { label: "Data Created", field: "data_created" },
          { label: "Data Updated", field: "data_updated" },
          { label: "Invoices", field: "invoices" },
          { label: "Contact", field: "contact" },
          { label: "Log Book", field: "log_book" },
          { label: "Contracts", field: "contracts" },
          { label: "GST", field: "gst" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/accounts?fields=*.*");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
