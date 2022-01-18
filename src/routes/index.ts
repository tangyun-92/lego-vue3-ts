import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Editor from '../views/editor.vue'
import TemplateDetail from '../views/templateDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
    },
    {
      path: '/template/:id',
      name: 'template',
      component: TemplateDetail,
    },
  ],
})

export default router