<template>
    <section class="register">

        <div class="info">
            <nuxt-link to="/" class="logo">
                <img width="450" class="mb-6" src="../assets/icons/logo/logo.png" alt="logo">
            </nuxt-link>
            <p class="welcome"> <strong>¡Bienvenido futuro Master!</strong> Si has llegado hasta aquí es que
                quieres mejorar tus skills. <strong>¡Así que vamos a ello!</strong>
            </p>
        </div>


        <div class="flex justify-center self-center z-10">
            <div class="p-12 bg-white mx-auto rounded-3xl w-96 ">
                <div class="mb-7">
                    <h3 class="font-semibold text-3xl text-gray-800 text-center">Registro</h3>
                </div>
                <div class="space-y-6">
                    <div>
                        <p class="text-lg font-semibold text-black">Nickname</p>
                        <input v-model="username"
                            class="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="text" placeholder="Introduce tu nickname">
                    </div>
                    <!-- {{ username }} -->


                    <div>
                        <p class="text-lg font-semibold text-black">Correo</p>
                        <input v-model="email"
                            class="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="email" placeholder="Introduce tu correo">
                    </div>
                    <!-- {{ email }} -->

                    <div>
                        <p class="text-lg font-semibold text-black">Contraseña</p>
                        <PasswordInput v-model="password"/>
                    </div>
                    <!-- {{ password }} -->

                    <div>
                        <p class="text-lg font-semibold text-black">Confirmar contraseña</p>
                        <PasswordInputRegister v-model="confirmPassword"/>
                    </div>
                    <!-- {{ confirmPassword }} -->


                    <div v-if="showErrors">
                        <p class="text-red-600">{{ errMsg }}</p>
                    </div>


                    <div class="flex items-center justify-between">

                        <div class="flex items-center mb-4">
                            <input id="acceptTermsAndConditions" type="checkbox" value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="acceptTermsAndConditions"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto los términos y
                                condiciones</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" @click="register()"
                            class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                            Registrarse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { api_ip } from "~/constants";
import { getErrorFromResponse } from "../utils/errors"
import axios from "axios"
var username = ref("")
var email = ref("")
var password = ref("")
var confirmPassword = ref("")

var showErrors = ref(false)
var errMsg = ref("")

async function register() {
    if (password.value !== confirmPassword.value) {
        showErrors.value = true;
        errMsg.value = "Las contraseñas no coinciden";
        return;
    }

    if (!isEmailValid(email.value)) {
        showErrors.value = true;
        errMsg.value = "Correo electrónico inválido";
        return;
    }

    const passwordValidation = validatePassword(password.value);
    if (!passwordValidation.valid) {
        showErrors.value = true;
        errMsg.value = "Contraseña inválida: ";
        if (passwordValidation.errors.MIN_LENGTH) {
            errMsg.value += `Debe tener al menos ${MIN_LENGTH} caracteres. `;
        }
        if (passwordValidation.errors.MANDATORY) {
            errMsg.value += `Debe incluir al menos una de las siguientes: ${passwordValidation.errors.MANDATORY.join(', ')}. `;
        }
        return;
    }

    if (!document.getElementById('acceptTermsAndConditions').checked) {
        showErrors.value = true;
        errMsg.value = "Debes aceptar los términos y condiciones";
        return;
    }

    axios.post(`${api_ip}/auth/register`, {
        username: username.value,
        email: email.value,
        password: password.value
    })
        .then(response => {
            if (response.data.success) {
                showErrors.value = false;
                navigateTo('/login')
            }
        })
        .catch(error => {
            if (error.response && error.response.data.success === false) {
                console.error('Error al hacer el registro:', error.message);
                showErrors.value = true;
                errMsg.value = getErrorFromResponse(error);
            } else {
                showErrors.value = true;
                console.error("Error inesperado");
            }
        });
}



const SPECIAL_CHARACTERS = "!@#$%^&*()_-+={}[]|:;\"<>,.?/~\\`"
const MIN_LENGTH = 6

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function validatePassword(password = "") {

    const errors = {};
    const err_mandatory = []

    const hasMinimumLength = password.length >= MIN_LENGTH
    const hasLowercase = /[a-z]/.test(password)
    const hasUppercase = /[A-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialCharacter = password.split("").some(x => SPECIAL_CHARACTERS.includes(x))


    // Minimum 8 characters
    if (!hasMinimumLength) {
        errors[`MIN_LENGTH`] = MIN_LENGTH
    }

    // At least one lowercase letter
    if (!hasLowercase) {
        err_mandatory.push("LOWERCASE")
    }

    // At least one uppercase letter
    // or
    // At least one number
    // or
    // At least one symbol
    if (!hasUppercase && !hasNumber && !hasSpecialCharacter) {
        err_mandatory.push(["Mayúscula", "Número", "Símbolo"])
    }

    if (err_mandatory.length > 0) {
        errors.MANDATORY = err_mandatory
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    }
}




</script>


<style scoped>
section {
    overflow-x: hidden;
    overflow-y: hidden;
    /* Añadido overflow-y: hidden; */
}

.register {
    display: grid;
    grid-template-columns: 5fr 3fr;
}

.info {
    display: flex;
    align-items: cener;
    justify-content: center;
    flex-direction: column
}

.info .logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.welcome {
    font-family: 'JetBrains Mono';
    src: url('~/assets/fonts/JetBrainsMonoNL-Thin.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-size: 1.5rem;
    color: white;
}
</style>