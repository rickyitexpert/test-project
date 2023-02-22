<template>
  <div class="q-pa-md">
    <div>
      <h5>log_book</h5>
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
          { label: "Contact Id", field: "contact_id" },
          { label: "Vehicle Id", field: "vehicle_id" },
          { label: "Driver Id", field: "driver_id" },
          { label: "Contract Id", field: "contract_id" },
          { label: "Log Type", field: "log_type" },
          { label: "Date From", field: "data_form" },
          { label: "Data To", field: "data_to" },
          { label: "Rent", field: "rent" },
          { label: "Initial Reading", field: "initial_reading" },
          { label: "Final Reading", field: "final_reading" },
          { label: "Running Kms", field: "running_kms" },
          { label: "Amount", field: "amount" },
          { label: "Status", field: "status" },
          { label: "Is Invoiced", field: "is_invoiced" },
          { label: "Is Paid", field: "is_paid" },
          { label: "Sort", field: "sort" },
          { label: "User Created", field: "user_created" },
          { label: "User Updated", field: "user_updated" },
          { label: "Data Created", field: "data_created" },
          { label: "Data Updated", field: "data_updated" }
        ],
      },
    };
  },
  methods: {
    insertData (data) {
      this.table.rows.push(data);
    },
    async fetchData () {
      let response = await this.$api.get("https://gangotri-api.brainysoftwares.com/items/log_book");
      this.table.rows = response.data.data;
    },
  },
  created () {
    this.fetchData();
  },
};
</script>
