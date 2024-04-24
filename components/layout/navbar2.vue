<script setup>

import moment from 'moment';
import { userStore } from '../storages/userStore.js'
import axios from "axios"

const mostrarFechaAbsolutaORealtiva = (fecha) => {
  const fechaActual = moment();
  const fechaInput = moment(fecha);

  const diferenciaEnDias = fechaActual.diff(fechaInput, 'days');

  if (Math.abs(diferenciaEnDias) < 7) {
    return fechaInput.fromNow();
  } else {
    return fechaInput.format('YYYY-MM-DD HH:mm:ss');
  }
}







const store = userStore()

var userData = store.userInfo
var jwt = store.$state.jwt

console.log(store.notifications)

function logout() {
  localStorage.removeItem('jwt')
  store.clearUser()
  navigateTo('/')
}

var mostrarModalNotificaciones = ref(false)

function showHideNotifications() {
  mostrarModalNotificaciones.value = !mostrarModalNotificaciones.value
  if(mostrarModalNotificaciones.value){
    const ids = store.$state.notifications.map(x=>x.id)
    axios.post('http://172.30.5.61:3000/notifications/seen', {
        ids: ids
    }, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    .then(response => {
      console.log(response)
      console.log('ids enviados')
    })
    .catch(error => {
        console.error(error);
    });
  }
}

function executeAction(requireToken, url) {
  if (requireToken) {
    axios.post(url, undefined, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(response => {
        console.log(response);
        store.$state.followers = response.data.data.followers
        store.$state.friends = response.data.data.friends
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
      });
  } else {
    alert("verificar correo")
  }
}
</script>

<template>
  <nav class="border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-5">
      <button @click="$router.back()" class="flex items-center space-x-3 rtl:space-x-reverse pl-5">
        <img width="250" src="../../assets/icons/logo/logo.png" alt="Key Master">
      </button>

      <div class="hidden w-full md:flex md:w-auto ml-4 pr-5" id="navbar-default">
        <ul
          class="info-ranking font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
          <li>
            <nuxt-link to="/register"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 hover:font-semibold">
              <div class="relative group flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 192 512" stroke="currentColor"
                  stroke-width="1" class="w-5 h-5 mr-0.5 slide slide-register">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                </svg>
                <span class="text inline-block hidden group-hover:inline-block">Info</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/login"
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
            <nuxt-link to="/profile"
              class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 font-semibold">
              <div class="relative group flex items-center">
                <img class="navbar-user-img" :src="userData.profileImg" alt="">
                <span class="text inline-block">¡Hola, <b>{{ userData.username }}</b>!</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <button @click="showHideNotifications" class="campanita" id="openNotifications">
              <div v-if="mostrarModalNotificaciones" class="desplegable-notificaciones">
                <div class="notification" v-for="notification in store.notifications">
                  <div v-if="notification.type == 'FOLLOW'" class="flex justify-between">
                    <ProfilePic :src="notification.target.profileImg" small="true" />
                    <div>
                      <p>
                        {{ notification.msg }}
                      </p>
                      <p class="text-gray-300">
                        {{mostrarFechaAbsolutaORealtiva(notification.date)}}
                      </p>
                    </div>
                    <div v-for="action in notification.actions">
                      <button @click="executeAction(action.requireToken, action.url)"
                        :class="{ 'action-button': !action.isRed, 'cancel-button': action.isRed }">
                        {{ action.name }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7 mr-0.5 slide rotate">
                <path fill="#ffffff"
                  d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22" />
              </svg>
            </button>
          </li>
          <li>
            <!-- <nuxt-link to="/login"> -->
            <!-- class="block py-2 px-3 text-white rounded md:p-0 dark:text-white md:dark:text-blue-500 font-semibold"> -->
            <div @click="logout()" class="relative group flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-7 h-7 mr-0.5 slide rotate">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>

              <span style="cursor: pointer;" class="text inline-block hidden group-hover:inline-block text-white">Cerrar
                sesión</span>
            </div>
            <!-- </nuxt-link> -->
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

.navbar-user-img {
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid white;
  margin-right: 5px;
}

.campanita {
  position: relative;

}

.campanita .desplegable-notificaciones {
  position: absolute;
  top: 100%;
  margin-top: 30px;
  right: 0%;
  background-color: white;
  padding: 20px;
  width: 500px;
  max-height: 200px;
  overflow: scroll;
}

.action-button {
  background-color: #43219B;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

.cancel-button {
  background-color: red;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

.notification {
  margin-top: 10px;
}
</style>