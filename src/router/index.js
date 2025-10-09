import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import Dashboard from "../views/DashboardView.vue";
import TasksView from "../views/TasksView.vue";
import DeadlinesView from "../views/DeadlinesView.vue";
import ProgressView from "../views/ProgressView.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/tasks", component: TasksView },
  { path: "/deadlines", component: DeadlinesView },
  { path: "/progress", component: ProgressView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
