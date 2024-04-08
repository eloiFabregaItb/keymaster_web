<template>
    <section id="register">

        <div class="h-dvh flex justify-center items-center">
            <img class="ml-6" src="../assets/icons/logo/logo.png" alt="logo">
        </div>


        <div class="flex justify-center self-center z-10">
            <div class="p-12 bg-white mx-auto rounded-3xl w-96 ">
                <div class="mb-7">
                    <h3 class="font-semibold text-3xl text-gray-800 text-center">Registro</h3>
                </div>
                <div class="space-y-6">
                    <div>
                        <p class="text-lg font-semibold">Nickname</p>
                        <input
                            class="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="text" placeholder="Introduce tu nickname">
                    </div>

                    <div>
                        <p class="text-lg font-semibold">Correo</p>
                        <input
                            class="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="email" placeholder="Introduce tu correo">
                    </div>

                    <div>
                        <p class="text-lg font-semibold">Contraseña</p>
                        <input
                            class="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="password" placeholder="Introduce tu contraseña">
                    </div>

                    <div>
                        <p class="text-lg font-semibold">Confirmar contraseña</p>
                        <input
                            class="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="password" placeholder="Confirma tu contraseña">
                    </div>


                    <div class="flex items-center justify-between">

                        <div class="flex items-center mb-4">
                            <input id="acceptTermsAndConditions" type="checkbox" value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="acceptTermsAndConditions"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto los términos y condiciones</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                            Registrarse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#register {
    display: grid;
    grid-template-columns: 5fr 3fr;
}
</style>