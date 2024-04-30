<script setup>
</script>

<template>
  <nav class="bg border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-5">
      <nuxt-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse pl-5">
        <img width="250" src="../../assets/icons/logo/logo.png" alt="Key Master">
      </nuxt-link>
      <div class="hidden w-full md:flex md:w-auto ml-4 pr-5" id="navbar-default">
        <ul
          class="info-ranking font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
          <li>
            <nuxt-link to="/info"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 192 512" stroke="currentColor"
                  stroke-width="1" class="w-5 h-5 mr-0.5 mb-0.5 slide slide-register">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                </svg>
                <span class="text inline-block hidden group-hover:inline-block">Info</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/ranking"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512" stroke="currentColor"
                  class="w-6 h-6 mr-0.5 slide slide-register">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
                </svg>
                <span class="text inline-block hidden group-hover:inline-block">Ranking</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/guide"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6"
                  stroke="currentColor" class="w-7 h-7 mr-0.5 slide">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <span class="text inline-block hidden group-hover:inline-block">Guide</span>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>


      <div class="hidden w-full md:block md:w-auto ml-auto pr-5" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
          <li>
            <nuxt-link to="/register"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-7 h-7 mr-0.5 slide slide-register">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
                <span class="text inline-block hidden group-hover:inline-block">Register</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/login"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-7 h-7 mr-0.5 slide">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                <span class="text inline-block hidden group-hover:inline-block">Login</span>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<style scoped>
nav {
  position: fixed;
  width: 100%;
  z-index: 20;
}

li {
  list-style: none;
}


.info-ranking {
  margin-left: 2.5rem;
  display: flex;
  align-items: center;
}

.text {
  transition: all 0.4s ease;
  transition-delay: 0.1s;
}

.slide {
  transition: all 0.4s ease;
}

.group:hover .slide {
  transform: translateX(-8px);
}

.group:hover .slide-register {
  transform: translateX(-8px);
}
</style>