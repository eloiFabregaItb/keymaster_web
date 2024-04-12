<script>
export default {
  data() {
    return {
      showText: false
    };
  }
};
</script>


<template>
  <nav class="border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <button @click="$router.back()" class="flex items-center space-x-3 rtl:space-x-reverse pl-2">
        <img width="250" src="../../assets/icons/logo/logo.png" alt="Key Master">
      </button>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <ul
          class="font-medium flex flex-col rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
          <li>
            <nuxt-link to="/register"
              class="block text-white hover:font-semibold">
              <div class="relative group flex items-center" @mouseenter="showText = true" @mouseleave="showText = false">
                <span
                  class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-transparent group-hover:text-white transition-opacity duration-0 font-semibold"
                  :class="{ 'opacity-100': showText }">Info</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 mr-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-[-20px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/login"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center" @mouseenter="showText = true" @mouseleave="showText = false">
                <span
                  class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-transparent group-hover:text-white transition-opacity duration-300 font-semibold"
                  :class="{ 'opacity-100': showText }">Ranking</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 mr-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-[-20px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
              </div>
            </nuxt-link>
          </li>
          </ul>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
          <li>
            <nuxt-link to="/register"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center" @mouseenter="showText = true" @mouseleave="showText = false">
                <span
                  class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-transparent group-hover:text-white transition-opacity duration-300 font-semibold"
                  :class="{ 'opacity-100': showText }">Register</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 mr-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-[-20px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/login"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center" @mouseenter="showText = true" @mouseleave="showText = false">
                <span
                  class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-transparent group-hover:text-white transition-opacity duration-300 font-semibold"
                  :class="{ 'opacity-100': showText }">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 mr-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-[-20px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
              </div>
            </nuxt-link>
          </li>
          <!-- <li>
          <nuxt-link to="/register"
            class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
            <div class="link__hover" @mouseenter="showText = true" @mouseleave="showText = false">
              <span class="text-opacity-0 transition-opacity duration-300"
                :class="{ 'text-opacity-100': showText }">Register</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="transition-transform duration-300 transform translate-x-0 group-hover:translate-x-[20px]">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
            </div>
          </nuxt-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>



<style scoped>
.link__hover {
  display: flex;
  align-items: center;
}

.link__hover span {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.link__hover:hover span {
  opacity: 1;
}

.link__hover svg {
  width: 20px;
  height: 20px;
}

.link__hover {
  margin-right: 3rem;
}

nav {
  position: fixed;
  width: 100%;
  z-index: 20;
}

li {
  list-style: none;
}

.group .text-transparent {
  color: transparent;
}

.group:hover .text-transparent {
  color: white;
}

.relative {
  transition: width 0.3s ease-in-out;
  /* Agregamos una transición al ancho */
}

.relative:hover {
  width: auto;
  /* Al hacer hover, el contenedor se ajustará al tamaño del contenido */
}</style>
