<template>
  <div class="tasks-container">
    <h1>Gestión de Tareas</h1>

    <!-- Botón visible solo para el admin -->
    <button v-if="userRole === 'admin'" class="add-btn" @click="createTask">
      ➕ Crear Tarea
    </button>

    <div class="tasks-grid">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="task-card"
        @click="goToTask(task.id)"
      >
        <h2>{{ task.name }}</h2>
        <p>{{ task.description }}</p>

        <!-- Estados -->
        <button
          v-if="isAdmin"
          @click.stop="nextStatus(task)"
          :class="['status', task.status.toLowerCase().replace(' ', '-')]"
        >
          {{ task.status }}
        </button>

        <button
          v-else
          disabled
          :class="['status', task.status.toLowerCase().replace(' ', '-')]"
        >
          {{ task.status }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TasksView",
  inject: ["userRole"],
  data() {
    return {
      isAdmin: true,
      tasks: [
        { id: 1, name: "Diseñar interfaz", description: "Prototipo visual", status: "Pendiente" },
        { id: 2, name: "Configurar base de datos", description: "Estructura backend", status: "En desarrollo" },
        { id: 3, name: "Autenticación", description: "Inicio de sesión y roles", status: "Finalizada" },
      ],
      statusFlow: ["Pendiente", "En desarrollo", "Finalizada"],
    };
  },
  methods: {
    createTask() {
      this.tasks.push({
        id: this.tasks.length + 1,
        name: `Nueva tarea ${this.tasks.length + 1}`,
        description: "Descripción pendiente",
        status: "Pendiente",
      });
    },
    nextStatus(task) {
      const idx = this.statusFlow.indexOf(task.status);
      task.status = this.statusFlow[(idx + 1) % this.statusFlow.length];
    },
    goToTask(taskId) {
      // 🔗 Redirige a la vista individual de la tarea
      this.$router.push(`/task/${taskId}`);
    },
  },
};
</script>

<style scoped>
.tasks-container {
  background: #121212;
  color: #f5f5f5;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
}

/* Botón para crear tarea (solo admin) */
.add-btn {
  background: #800020;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 2rem;
}

.tasks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.task-card {
  background: #1f1f1f;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1rem;
  transition: 0.3s;
  cursor: pointer;
}

.task-card:hover {
  border-color: #800020;
  transform: scale(1.02);
}

/* Evita que el botón herede el evento del click */
.status {
  margin-top: 1rem;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.status.pendiente {
  background: #a0522d;
}

.status.en-desarrollo {
  background: #3b82f6;
}

.status.finalizada {
  background: #16a34a;
}

.status:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .tasks-grid {
    grid-template-columns: 1fr;
  }
}
</style>
