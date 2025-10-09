<template>
  <div id="app">
    <header>
      <!--título clickeable -->
      <router-link to="/" class="logo">TeamTrack</router-link>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  background-color: #1e1e1e;
  color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  text-align: center;
  padding: 1rem;
}

/* Estilos del logo como el h1 */
.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #f5f5f5;
  text-decoration: none;
}

.logo:hover {
  color: #3b82f6; /* Azul al pasar el mouse */
}

main {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
