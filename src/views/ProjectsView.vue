<template>
  <div class="projects-container"> 
    <h1>Proyectos</h1>

    <!-- boton del admin -->
    <button v-if="userRole === 'admin'" class="add-btn" @click="createProject">
      ➕ Nuevo Proyecto
    </button>

    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
      >
        <div class="project-header">
          <h3 class="project-name" @click="goToProject(project.name)">
            {{ project.name }}
          </h3>
          <spam
            v-if="userRole === 'admin'"
            class='bx bxs-download icon'
            @click.stop="downloadProject(project)">
          </spam>
        </div>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'boxicons/css/boxicons.min.css';
export default {
  name: "ProjectsView",
  inject: ["userRole"], // recibe el rol desde App.vue
  data() {
    return {
      projects: [
        { id: 1, name: "Proyecto 1", description: "Gestión de tareas A" },
        { id: 2, name: "Proyecto 2", description: "Gestión de tareas B" },
        { id: 3, name: "Proyecto 3", description: "Gestión de tareas C" },
        { id: 4, name: "Proyecto 4", description: "Gestión de tareas D" },
      ],
    };
  },
  methods: {
    goToProject(projectName) {
      this.$router.push(`/tasks/${encodeURIComponent(projectName)}`);
    },
    downloadProject(project) {
      alert(`Descargando: ${project.name}`);
    },
    createProject() {
      alert("Función para crear nuevo proyecto (solo admin).");
    },
  },
};
</script>

<style scoped>
.projects-container {
  color: #f5f5f5;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.add-btn {
  background-color: #800020;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.add-btn:hover {
  background-color: #a22;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-items: center;
}

.project-card {
  border: 1px solid #333;
  border-radius: 8px;
  width: 220px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  background: #292929;
  border-color: #800020;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-name {
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
}

.project-name:hover {
  color: #800020;
}

.icon {
  background: #800020;
  border-radius: 6px;
  padding: 6px 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.icon:hover {
  transform: scale(1.1);
  background: #a22;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    width: 90%;
  }
}
</style>
