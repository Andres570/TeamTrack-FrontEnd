<<template>
  <div class="task-detail">
    <button class="back-btn" @click="$router.back()">← Volver</button>
    <h1>{{ task.name }}</h1>
    <p>{{ task.description }}</p>

    <div class="status">
      <label>Estado:</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskDetailView",
  data() {
    return {
      task: {
        id: this.$route.params.id,
        name: `Tarea ${this.$route.params.id}`,
        description: "Detalles de la tarea seleccionada.",
      },
    };
  },
};
</script>

<style scoped>
.task-detail {
  color: #f5f5f5;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
}

.back-btn {
  background-color: #800020;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.back-btn:hover {
  background-color: #a00028;
}

.status {
  margin-top: 1rem;
}

select {
  background-color: #292929;
  color: white;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 0.3rem;
}
</style>
