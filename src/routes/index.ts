import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Editor from '../views/editor.vue'
import TemplateDetail from '../views/templateDetail.vue'
import Index from '../views/index.vue'

/**
 * 
 */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'template/:id',
          name: 'template',
          component: TemplateDetail
        },
      ],
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
    },
  ],
})

export default router