<template>
  <div class="dashboard-view">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";

export default {
  name: "DashboardView",
  components: { Dashboard },
};
</script>

<style scoped>
.dashboard-view {
  display: flex;
  flex-direction: column;
  align-items: center;      /* Centra horizontalmente */
  justify-content: flex-start; /* Mantiene arriba */
  padding-top: 2rem;        /* Espacio desde el top */
  min-height: 100vh;        /* Ocupa toda la pantalla */
  text-align: center;
}
</style>
