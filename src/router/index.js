import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TasksView from '../views/TasksView.vue'
import DeadlinesView from '../views/DeadlinesView.vue'
import ProgressView from '../views/ProgressView.vue'
import Dashboard from '../views/DashboardView.vue' // 👈 importa tu dashboard

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard }, // 👈 registra la ruta
  { path: '/tasks', component: TasksView },
  { path: '/deadlines', component: DeadlinesView },
  { path: '/progress', component: ProgressView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
