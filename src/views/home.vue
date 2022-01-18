<template>
  <div class="content-container">
    <template-list :list="testData" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import TemplateList from './../components/TemplateList.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'

export default defineComponent({
  name: 'Home',
  components: {
    TemplateList
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const testData = computed(() => store.state.templates)

    return {
      testData
    }
  }
})
</script>

<style>
</style>
