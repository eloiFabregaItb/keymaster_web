<template>
    <section id="login">
        <div class="h-dvh flex flex-col justify-center items-center text-style mt-5 mb-5 text-white">
            <img width="450" class="mb-6" src="../assets/icons/logo/logo.png" alt="logo">
            <p class="welcome"> <strong>¡Bienvenido futuro Master!</strong> ¿Has notado una mejora en tus skills? Seguro
                que si, así pues <strong>¡Vamos a ello!</strong>
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
                    <div class="relative" x-data="{ show: true }" style="margin-top: 0px;">
                        <input :type="show ? 'password' : 'text'"
                            class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            placeholder="Introduce tu contraseña" v-model="password">

                        <div class="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">

                            <svg @click="show = !show" :class="{ 'hidden': !show, 'block': show }"
                                class="h-4 text-purple-700" fill="none" xmlns="http://www.w3.org/2000/svg"
                                viewbox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                </path>
                            </svg>

                            <svg @click="show = !show" :class="{ 'block': !show, 'hidden': show }"
                                class="h-4 text-purple-700" fill="none" xmlns="http://www.w3.org/2000/svg"
                                viewbox="0 0 640 512">
                                <path fill="currentColor"
                                    d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                                </path>
                            </svg>

                        </div>
                    </div>
                    

                    <!-- {{ user }}
                    {{ password }}
                    {{ showErrors }} -->

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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from "axios"
import { userStore } from '../storages/userStore.js'

const store = userStore()

var show = ref(true)

var user = ref("")
var password = ref("")

var showErrors = ref(false)
var errMsg = ref("")

async function login() {
    axios.post('http://172.30.5.61:3000/auth/login', {
        login: user.value,
        password: password.value
    })
        .then(response => {
            if (response.data.success) {
                showErrors.value = false;
                localStorage.setItem('jwt', response.data.jwt);
                navigateTo('/profile')
                store.updateUser({
                    email: response.data.email,
                    username: response.data.username,
                    profileImg: response.data.profileImg,
                    //profileImg: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
                    emailVerified: response.data.emailVerified,
                    jwt: response.data.jwt
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
    margin-left: 23rem;
}
</style>