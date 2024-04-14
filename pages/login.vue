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
                            type="email" placeholder="Introduce tu nickname o correo">
                    </div>


                    <div class="relative" x-data="{ show: true }">
                        <p class="text-lg font-semibold">Contraseña</p>
                        <input type="password"
                            class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            placeholder="Introduce tu contraseña">
                    </div>

                    ip {{ ip_api }}

                    <div>
                        <button type="submit"
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