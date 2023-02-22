<template>
  <div class="q-pa-md">
    <div>
      <h5>accounting_receipts</h5>
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
          { label: "Account Id ", field: "account_id" },
          { label: "Receipt Date", field: "receipt_date" },
          { label: "Receipt Number", field: "receipt_number" },
          { label: "Receipt Mode", field: "receipt_mode" },
          { label: "Receipt Amount", field: "receipt_amount" },
          { label: "User Created", field: "user_created" },
          { label: "User Updated", field: "user_updated" },
          { label: "Data Created", field: "data_created" },
          { label: "Receipt Status", field: "receipt_status" },
          { label: "Receipt Status", field: "receipt_status" },
          { label: "Receipt Settlement", field: "receipt_settlement" },
          { label: "Date Updated", field: "date_updated" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/accounting_receipts?fields=*.*");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
