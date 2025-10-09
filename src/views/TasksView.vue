<template>
  <div class="view-container">
    <h1>Tareas</h1>
    <p>Aquí podrás gestionar tus tareas.</p>
  </div>
</template>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  align-items: center;      
  justify-content: flex-start; 
  padding-top: 2rem;        
  min-height: 100vh;        
  text-align: center;
}

.btn-back {
  margin-top: 2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn-back:hover {
  background-color: #2563eb;
}
</style>
