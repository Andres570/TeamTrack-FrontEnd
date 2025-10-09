<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <input type="email" placeholder="Correo electrónico" v-model="email" required />
      <input type="password" placeholder="Contraseña" v-model="password" required />

      <button type="submit">Entrar</button>
    </form>

    <p>
      ¿No tienes cuenta?
      <router-link to="/register">Regístrate</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.login {
  text-align: center;
  width: 300px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin: 8px 0;
  padding: 10px;
  border-radius: 6px;
  border: none;
}

button {
  margin-top: 1rem;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
