<template>
  <nav class="navbar">
    <router-link to="/" class="link" exact-active-class="active">Home</router-link>
    <router-link to="/dashboard" class="link" exact-active-class="active">Dashboard</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: #2a2a2a;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.link {
  color: #ddd;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.link:hover {
  color: #fff;
}

.active {
  color: #800020; /* Vino tinto para la pestaña activa */
  font-weight: bold;
}
</style>
