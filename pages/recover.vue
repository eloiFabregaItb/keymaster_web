<template>
    <section id="login" class="recover">
        <div class="flex justify-center items-center z-10">
            <div class=" container p-12 bg-white rounded-3xl w-4/12 flex-column gap-5">
                <div v-if="page == 1">
                    <div class="mb-7 text-center">
                        <h3 class="font-semibold text-2xl text-gray-800">Introduce tu usuario o correo</h3>
                    </div>
                    <div class="space-y-6">
                        <div>
                            <p class="text-lg font-semibold">Correo o usuario</p>
                            <input
                                class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                                type="text" placeholder="Introduce tu correo o usuario" v-model="usernameOrEmail">
                        </div>
                    </div>
                    <div v-if="showErrors">
                        <p class="text-red-600">{{ errMsg }}</p>
                    </div>
                    <div class="mt-4">
                        <button type="submit"
                            class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                            @click="sendMail">Enviar correo </button>
                    </div>
                </div>

                <div v-if="page == 2">
                    <div class="mb-7 text-center">
                        <h3 class="font-semibold text-2xl text-gray-800">Introduce el código enviado a {{
                    hiddenEmail }}
                        </h3>
                    </div>
                    <div class="space-y-6">
                        <div>
                            <p class="text-lg font-semibold">Código</p>
                            <input v-model="mailCode"
                                class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                                type="text" placeholder="Introduce tu código">
                        </div>
                        <div v-if="showErrors">
                            <p class="text-red-600">{{ errMsg }}</p>
                        </div>
                        <div>
                            <button type="submit" @click="sendCode"
                                class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                                Enviar código
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="page == 3">
                    <div class="mb-7 text-center">
                        <h3 class="font-semibold text-2xl text-gray-800">Introduce tu nueva contraseña</h3>
                    </div>
                    <div class="space-y-6">
                        <div>
                            <p class="text-lg font-semibold">Contraseña</p>
                            <input v-model="password"
                                class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                                type="text" placeholder="Introduce tu nueva contraseña">
                        </div>
                        <div>
                            <p class="text-lg font-semibold">Confirmar contraseña</p>
                            <input v-model="confirmPassword"
                                class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                                type="text" placeholder="Confirma tu nueva contraseña">
                        </div>
                        <div v-if="showErrors">
                            <p class="text-red-600">{{ errMsg }}</p>
                        </div>
                        <div>
                            <button type="submit" @click="sendNewPassword"
                                class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                                Establecer nueva contraseña
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from "axios"
import { api_ip } from "~/constants";
var page = ref(1)
var usernameOrEmail = ref("")
var hiddenEmail = ref("")
var mailCode = ref("")
var password = ref("")
var confirmPassword = ref("")
var showErrors = ref(false)
var errMsg = ref("")
async function sendMail() {
    if (usernameOrEmail.value === "") {
        showErrors.value = true;
        errMsg.value = "Introduce tu usuario o contraseña"
    } else {
        showErrors.value = false
        errMsg.value = ""
        axios.post(`${api_ip}/auth/forgotten`, {
            login: usernameOrEmail.value,
        })
            .then(response => {
                if (response.data.success) {
                    hiddenEmail.value = response.data.data.email
                    showErrors.value = false
                    page.value = 2
                }
            })
            .catch(error => {
                showErrors.value = true
                errMsg.value = error.response.data.err.msg
            })
    }
}
async function sendCode() {
    axios.post(`${api_ip}/auth/checkforgotten`, {
        login: usernameOrEmail.value,
        code: mailCode.value
    })
        .then(response => {
            if (response.data.success) {
                console.log(response)
                showErrors.value = false
                page.value = 3
            }
        })
        .catch(error => {
            showErrors.value = true
            errMsg.value = error.response.data.err.more
        })
}
async function sendNewPassword() {
    if (password.value !== confirmPassword.value) {
        showErrors.value = true;
        errMsg.value = "Las contraseñas no coinciden";
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
    showErrors.value = false
    errMsg.value = ""
    axios.post(`${api_ip}/auth/changepassword`, {
        login: usernameOrEmail.value,
        code: mailCode.value,
        password: password.value
    })
        .then(response => {
            if (response.data.success) {
                navigateTo('/login')
            }
        })
}
const SPECIAL_CHARACTERS = "!@#$%^&*()_-+={}[]|:;\"<>,.?/~\\`"
const MIN_LENGTH = 6
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
#login {
    display: grid;
    grid-template-columns: 1fr;
}

.container {
    width: 100%;
}
</style>