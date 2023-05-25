import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import NewsEditView from '../views/NewsEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:slug',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/newsedit/:slug',
      name: 'newsedit',
      component: NewsEditView
    }
  ]
})

export default router
