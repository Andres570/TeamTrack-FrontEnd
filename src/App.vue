<template>
  <div id="app">
    <header>
      <h1>TeamTrack</h1>
    </header>

    <Navbar />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
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

main {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

