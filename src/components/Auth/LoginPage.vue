<template>
  <div class="login h-screen flex no-warp select-none">
    <div class="flex-1 flex no-wrap flex-col bg-white">
      <div class="flex sm:hidden container p-5 items-center pb-3">
        <img
          class="w-[40px] mr-3"
          src="https://picsum.photos/1077"
          alt="logo"
        />
        <p class="font-[800] font-inter text-2xl">Exemple</p>
      </div>
      <section
        class="login-form h-full flex flex-col justify-center w-full sm:w-96 max-w-sm mx-auto px-4 sm:px-0"
      >
        <h1
          class="title text-[#111827] font-[800] font-inter text-center text-3xl mb-10"
        >
          Welcome Back
        </h1>
        <h1
          class="title text-[#111827] font-[800] font-inter text-center text-3xl mb-10"
        >
          Welcome Back
        </h1>

        <q-form @submit="onSubmit">
          <label for="account" class="text-xs">Account</label>
          <q-input
            id="account"
            class="mb-3"
            dense
            label="Input Your Email"
            type="email"
            debounce="500"
            v-model.trim="form.email"
            outlined
          />

          <label for="password" class="text-xs">Password</label>
          <q-input
            id="password"
            dense
            label="Input Your Password"
            type="password"
            debounce="500"
            v-model.trim="form.password"
            outlined
          >
            <template v-slot:append>
              <q-icon
                @click="togglePassword"
                name="visibility"
                class="cursor-pointer"
              />
            </template>
          </q-input>

          <div class="q-gutter-sm flex mt-2 mb-3">
            <q-checkbox v-model="rememberMe" label="Remember Me" />
            <q-radio
              v-model="form.loggedAs"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="chaq"
              label="WABA"
            />
            <q-radio
              v-if="loginOrq || loginMulti"
              v-model="form.loggedAs"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="orq"
              label="ORQ"
            />
          </div>

          <q-btn
            class="w-full h-9 font-normal rounded-md text-white bg-primary"
            type="submit"
          >
            Sign in
          </q-btn>

          <router-link
            to="/reset-password"
            class="block my-4 text-center text-primary"
          >
            Forgot Password
          </router-link>
        </q-form>

        <p class="mt-4 text-gray-400 text-sm">
          Don't have an account?
          <router-link class="text-primary" to="/register">
            <!-- Update link to registration -->
            Register
          </router-link>
        </p>

        <footer class="mt-3">
          <p class="text-gray-400 text-sm">
            By logging in, you agree to
            <a class="text-primary" href="/adem" target="_blank"
              >Terms of Use</a
            >
          </p>
        </footer>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const form = ref({
  email: '',
  password: '',
  loggedAs: '',
});

const rememberMe = ref(false);
const loginOrq = true; // Example placeholder
const loginMulti = true; // Example placeholder

const togglePassword = () => {
  const passwordInput = document.getElementById('password');
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
};

const onSubmit = () => {
  if (form.value.email && form.value.password) {
    // Handle login logic here
    $q.notify({
      type: 'positive',
      message: 'Login successful!',
    });
  } else {
    $q.notify({
      type: 'negative',
      message: 'Please fill in all fields!',
    });
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
