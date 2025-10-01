<template>
  <div class="dashboard-panel">
    <h2>Menú principal</h2>
    <div class="cards">
      <div class="card">Tareas pendientes</div>
      <div class="card">Próximos plazos</div>
      <div class="card">Progreso</div>
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
}
</style>
