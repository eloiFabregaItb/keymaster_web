<template>
    <section id="login">
        <div class="h-vh flex flex-col justify-center items-center text-style text-white">
            <nuxt-link to="/">
                <img width="450" class="mb-6" src="../assets/icons/logo/logo.png" alt="logo">
            </nuxt-link>
            <p class="welcome"> <strong>¡Bienvenido, Master!</strong> ¿Has notado una mejora en tus habilidades? Seguro
                que sí. <strong>¡Así que sigamos con ello!</strong>
            </p>
        </div>

        <div class="flex justify-center self-center z-10">
            <div class="p-12 bg-white mx-auto rounded-3xl w-96 flex-column gap-5">
                <div class="mb-7 text-center">
                    <h3 class="font-semibold text-3xl text-gray-800">Inicia sesión</h3>
                    <span class="text-gray-400 text-center">¿No tienes cuenta?
                        <nuxt-link to="/register"
                            class="color-primary py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Crea una</nuxt-link>
                    </span>
                </div>
                <div class="space-y-6">
                    <div class="">
                        <p class="text-lg font-semibold">Nickname o correo</p>
                        <input
                            class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="email" placeholder="Introduce tu nickname o correo" v-model="user">
                    </div>

                    <p class="text-lg font-semibold">Contraseña</p>
                    <PasswordInput v-model="password" />

                <div v-if="showErrors">
                    <p class="text-red-600">{{ errMsg }}</p>
                </div>
                    <div>
                        <button type="submit" @click="login()"
                            class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                            Inicia sesión
                        </button>
                    </div>
                    <div class="flex items-center justify-between">

                        <div class="text-sm ml-auto">
                            <span class="text-gray-400">¿Has olvidado tu contraseña?
                                <nuxt-link to="/recover"
                                    class="color-primary py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                    aria-current="page">Recupérala</nuxt-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { api_ip } from "~/constants";
import PasswordInput from "../components/PasswordInput.vue"
import axios from "axios"
import { userStore } from '../storages/userStore.js'
//import { handleLoginSocket } from "~/composables/useSocket";

const emit = defineEmits(["login"])


const store = userStore()
var user = ref("")
var password = ref("")

var showErrors = ref(false)
var errMsg = ref("")

async function login() {
    axios.post(`http://${api_ip}/auth/login`, {
        login: user.value,
        password: password.value
    })
        .then(response => {
            console.log(response)
            if (response.data.success) {
                showErrors.value = false;
                localStorage.setItem('jwt', response.data.jwt);
                //handleLoginSocket(response.data.jwt)
                navigateTo('/')
                store.updateUser({
                    email: response.data.email,
                    username: response.data.username,
                    profileImg: response.data.profileImg,
                    emailVerified: response.data.emailVerified,
                    jwt: response.data.jwt,
                    isLogged: true,
                    friends: response.data.friends,
                    followers: response.data.followers,
                    notifications: response.data.notifications
                })
            }
        })
        .catch(error => {
            if (error.response && error.response.data.success === false) {
                console.error('Error al iniciar sesión:', error.message);
                showErrors.value = true;
                errMsg.value = error.response.data.err.msg;
            } else {
                showErrors.value = true;
                console.error("Error inesperado");
            }
        });
}
</script>

<style scoped>
#login {
    display: grid;
    grid-template-columns: 5fr 3fr;
}

.welcome {
    font-family: 'JetBrains Mono';
    src: url('~/assets/fonts/JetBrainsMonoNL-Thin.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-size: 1.5rem;
}

.h-dvh {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    padding-left: 14rem;
}
</style>