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
        <q-card class="q-pa-md q-ma-md scroll" style="height:80vh">
          <component ref="form" :is="moduleFormComponent" @formSubmit="insertData">

          </component>
        </q-card>
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
      handler (val) {
        console.log(val, this.moduleName)
        this.moduleViewComponent = defineAsyncComponent(() => import('./../components/' + this.moduleName + '/view.vue'))

        this.moduleFormComponent = defineAsyncComponent(() => import('./../components/' + this.moduleName + '/form.vue'))
      },
      immediate: true
    }
  },
  methods: {
    async insertData (data) {
      let response = await this.$api.post('/items/' + this.moduleName, data)
      this.$refs.view.fetchData()
      this.$router.back()
    }
  },
}

</script>
