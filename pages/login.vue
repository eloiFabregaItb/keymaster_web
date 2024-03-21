<template>
<section id="login">
    
    <div class="h-dvh flex justify-center items-center"> 
        <img class="ml-6" src="../assets/icons/logo/logo.png" alt="gfg"> 
    </div> 


    <div class="flex justify-center self-center  z-10">
        <div class="p-12 bg-white mx-auto rounded-3xl w-96 ">
			<div class="mb-7">
                <h3 class="font-semibold text-3xl text-gray-800 text-center">Inicia sesión</h3>
				<span class="text-gray-400">¿No tienes cuenta?
                    <nuxt-link to="/register" class="color-primary py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Crea una</nuxt-link>
                </span>
                </div>
                <div class="space-y-6">
                    <div class="">
                        <p class="text-lg">Correo</p>
                        <input class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400" type="" placeholder="Introduce tu correo">
                    </div>
                    
                    
					<div class="relative" x-data="{ show: true }">
                        <p class="text-lg">Contraseña</p>
                        <input placeholder="Introduce tu contraseña" class="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400">
        </div>
        
        
        <div class="flex items-center justify-between">
            
            <div class="text-sm ml-auto">
                    <span class="text-gray-400">¿Has olvidado tu contraseña?
                        <nuxt-link to="/recover" class="color-primary py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Recupérala</nuxt-link>
                    </span>
						</div>
					</div>
					<div>
                        <button type="submit" class="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                            Sign in
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
    grid-template-columns: 1fr 1fr;
}
</style>