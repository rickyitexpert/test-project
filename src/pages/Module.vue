<template>
  <q-page>
    <div class="row">
      ModuleName: {{ moduleName }},
      Mode: {{ mode }}
    </div>
    <div class="row q-pa-md">
      <div v-if="mode !== 'add'">
        <q-btn label="add" to="./add" />
      </div>
      <div class="col" v-if="mode === 'add'">
        <component ref="form" :is="moduleFormComponent" @formSubmit="insertData">

        </component>
      </div>
      <div class="col">
        <component ref="view" :is="moduleViewComponent">

        </component>
      </div>

    </div>
  </q-page>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  props: ['moduleName', 'mode'],
  data () {
    return {
      moduleViewComponent: false,
      moduleFormComponent: false

    }
  },
  watch: {
    moduleName: {
      handler () {
        this.moduleViewComponent = defineAsyncComponent(() => import('./../components/' + this.moduleName + '/view.vue'))

        this.moduleFormComponent = defineAsyncComponent(() => import('./../components/' + this.moduleName + '/form.vue'))
      },
      immediate: true
    }
  },
  methods: {
    insertData (data) {
      console.log('Event Captured, Sedning Data to view insertMethod')
      alert()
      this.$refs.view.insertData(data)
      console.log('Data sent to view.vue now routing back')
      alert()
      this.$router.back()
    }
  },
}

</script>
