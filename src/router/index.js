import { createRouter, createWebHistory } from 'vue-router'
import AppMenu from '../components/AppMenu.vue'
import TodoForm from '../components/TodoForm.vue'

const routes = [
  {
    path: '/',
    name: 'AppMenu',
    component: AppMenu
  },
  {
    path: '/add-todo',
    name: 'TodoForm',
    component: TodoForm
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
