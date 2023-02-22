<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
</q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Accounts',
    caption: '',
    icon: 'book',
    link: '/modules/accounts/'
  },
  {
    title: 'Banks',
    caption: '',
    icon: 'school',
    link: '/modules/banks/'
  },
  {
    title: 'invoices',
    caption: '',
    icon: 'note',
    link: '/modules/invoices/'
  },
  {
    title: 'Accounting_Receipts',
    caption: '',
    icon: 'book',
    link: '/modules/accounting_receipts/'
  },
  {
    title: 'Accounting_Settlements',
    caption: '',
    icon: 'book',
    link: '/modules/accounting_settlements/'
  },
  {
    title: 'Accounting_Taxes',
    caption: '',
    icon: 'book',
    link: '/modules/accounting_taxes/'
  },
  {
    title: 'Contacts',
    caption: '',
    icon: 'phone',
    link: '/modules/contacts/'
  },
  {
    title: 'Contracts',
    caption: '',
    icon: 'book',
    link: '/modules/contracts/'
  },
  {
    title: 'Document_Sequence',
    caption: '',
    icon: 'book',
    link: '/modules/document_sequence/'
  },
  {
    title: 'Driver',
    caption: '',
    icon: 'book',
    link: '/modules/driver/'
  },
  {
    title: 'Invoices_Details',
    caption: '',
    icon: 'book',
    link: '/modules/invoices_details/'
  },
  {
    title: 'Invoices',
    caption: '',
    icon: 'book',
    link: '/modules/invoices/'
  },
  {
    title: 'Items',
    caption: '',
    icon: 'book',
    link: '/modules/items/'
  },
  {
    title: 'Log_Book',
    caption: '',
    icon: 'book',
    link: '/modules/log_book/'
  },
  {
    title: 'Organisation',
    caption: '',
    icon: 'book',
    link: '/modules/organisation/'
  },
  {
    title: 'Vehicle_type',
    caption: '',
    icon: 'book',
    link: '/modules/vehicle_type/'
  },
  {
    title: 'Vehicles',
    caption: '',
    icon: 'vehicles',
    link: '/modules/vehicles/'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
