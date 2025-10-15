import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TasksView from "../views/TasksView.vue";
import TaskDetailView from "../views/TaskDetailView.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: "/tasks/:projectName", name: "Tasks", component: TasksView, props: true },
  { path: '/task/:id', name: 'taskDetail', component: TaskDetailView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
