<template>
  <div class="content-container">
    <template-list :list="testData" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import TemplateList from './../components/TemplateList.vue'

const testData = [
  {
    id: 1,
    coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png'
  },
  { id: 2, coverImg: 'http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png' },
  {
    id: 3,
    coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-323204.png'
  },
  { id: 4, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png' },
  { id: 5, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-726751.png' },
  { id: 6, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-682056.png' }
]

export default defineComponent({
  name: 'Home',
  components: {
    TemplateList
  },
  setup() {
    const router = useRouter()

    return {
      router,
      testData
    }
  }
})
</script>

<style>
</style>
