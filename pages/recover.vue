<template>
    <section id="login">
        <div class="h-dvh flex flex-col justify-center items-center text-style mt-5 mb-5 text-white">
            <img width="450" class="mb-6" src="../assets/icons/logo/logo.png" alt="logo">
            <p class="welcome"> <strong>¡Vaya!</strong> Estás aprendiendo a ser un Master pero me parece que debes
                mejorar tu memoria. No te preocupes que para eso estamos nosotros.
                <strong>¡Vamos a ello!</strong>
            </p>
        </div>


        <div class="flex justify-center self-center z-10">
            <div class="p-12 bg-white mx-auto rounded-3xl w-96 flex-column gap-5">
                <div class="mb-7 text-center">
                    <h3 class="font-semibold text-2xl text-gray-800">Recuperar contraseña</h3>
                </div>
                <div class="space-y-6">
                    <div class="">
                        <p class="text-lg font-semibold">Nickname o correo</p>
                        <input
                            class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="email" placeholder="Introduce tu nickname o correo">
                    </div>


                    <div>
                        <button type="submit"
                            class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                            <nuxt-link to="/recoverPasswordCode">Enviar correo</nuxt-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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