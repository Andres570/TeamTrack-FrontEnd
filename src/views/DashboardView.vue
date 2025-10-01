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
  padding: 2rem;
  width: 100%;
}
</style>
