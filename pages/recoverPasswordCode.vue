<template>
    <section id="login">
        <div class="flex h-screen justify-center items-center z-10">
            <div class="p-12 bg-white mx-auto rounded-3xl w-96 flex-column gap-5">
                <div class="mb-7 text-center">
                    <h3 class="font-semibold text-2xl text-gray-800">Introduce tu código</h3>
                </div>
                <div class="space-y-6">
                    <div>
                        <p class="text-lg font-semibold">Código</p>
                        <input
                            class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="text" placeholder="Introduce tu código">
                    </div>
                    <div>
                        <p class="text-lg font-semibold">Contraseña</p>
                        <input
                            class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="text" placeholder="Introduce tu nueva contraseña">
                    </div>
                    <div>
                        <p class="text-lg font-semibold">Confirmar contraseña</p>
                        <input
                            class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="text" placeholder="Confirma tu nueva contraseña">
                    </div>

                    <div>
                        <button type="submit"
                            class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                            Recuperar contraseña
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
    grid-template-columns: 1fr;
}
</style>
