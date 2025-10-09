<template>
  <div class="auth-container">
    <h1>Crear Cuenta</h1>
    <form class="auth-form" @submit.prevent="handleRegister">
      <input type="text" v-model="name" placeholder="Nombre completo" required />
      <input type="email" v-model="email" placeholder="Correo electrónico" required />
      <input type="password" v-model="password" placeholder="Contraseña" required />
      <input
        type="password"
        v-model="confirmPassword"
        placeholder="Confirmar contraseña"
        required
        @input="checkPasswordMatch"
      />

      <!-- Mensaje de error -->
      <p v-if="passwordMismatch" class="error-msg">
        ⚠️ Las contraseñas no coinciden
      </p>

      <button type="submit" :disabled="passwordMismatch">Registrarse</button>
    </form>

    <p>
      ¿Ya tienes cuenta?
      <router-link to="/">Inicia sesión</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordMismatch: false,
    };
  },
  methods: {
    checkPasswordMatch() {
      this.passwordMismatch = this.password !== this.confirmPassword;
    },
    handleRegister() {
      if (this.passwordMismatch) {
        alert("Las contraseñas no coinciden");
        return;
      }
      alert("Registro exitoso");
      // Aquí se agrega la llamada al backend (axios o fetch)
      this.name = this.email = this.password = this.confirmPassword = "";
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #121212;
  color: #f0f0f0;
  padding: 2rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin-top: 1.5rem;
}

.auth-form input {
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background: #1f1f1f;
  color: #f0f0f0;
}

.auth-form button {
  padding: 0.75rem;
  background: #3a3a3a;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
}

.auth-form button:hover {
  background: #555;
}

.auth-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-msg {
  color: #ff6666;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  text-align: center;
}
</style>
