<template> 
  <div class="dashboard-panel">
    <h2>Menú principal</h2>
    <div class="cards">
      <router-link to="/tasks" class="card">Tareas pendientes</router-link>
      <router-link to="/deadlines" class="card">Próximos plazos</router-link>
      <router-link to="/progress" class="card">Progreso</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
.dashboard-panel {
  text-align: center;
  padding: 2rem;
  color: #f5f5f5;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.card {
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 8px;
  min-width: 180px;
  text-align: center;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.3);
  color: #f5f5f5;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.card:hover {
  background: #3a3a3a;
  transform: scale(1.05);
}
</style>
