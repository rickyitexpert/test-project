<template>
  <div class="q-pa-md">
    <div>
      <h5>invoices</h5>
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
          { label: "Invoice Number", field: "invoice_number" },
          { label: "Invoice Date", field: "invoice_data" },
          { label: "Grand Total", field: "grand_total" },
          { label: "Invoice Status", field: "invoice_status" },
          { label: "Payment Status", field: "payment_status" },
          { label: "User Created", field: "user_created" },
          { label: "User Updated", field: "user_updated" },
          { label: "Data Created", field: "data_created" },
          { label: "Data Updated", field: "data_updated" },
          { label: "Organization Id", field: "organization_id" },
          { label: "Invoice Details", field: "invoice_details" },
          { label: "Invoice Settlement", field: "invoice_settlement" },
          { label: "Period", field: "period" },
          { label: "Bank Id", field: "bank_id" },
          { label: "Booked By", field: "booked_by" },
          { label: "Oncall Plan", field: "oncall_plan" },
          { label: "Vehicle No", field: "vehicle_no" },
          { label: "Log Type", field: "log_type" },
          { label: "Journey Date", field: "journey_date" }



        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/invoices");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
