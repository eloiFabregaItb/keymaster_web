<template>
  <div class="btnBell" @click="showHideNotifications" @mouseleave="handleFocusOut">
    <IcoBell class="ico" />
    <span v-if="notifications && notifications.length > 0 && !hadBeenOpen" class="ball" />



    <div v-if="mostrarModalNotificaciones" class="desplegable-notificaciones">
      <div v-if="notifications.length > 0" class="notification" v-for="notification in notifications">
        <div v-if="notification.type == 'FOLLOW'" class="flex justify-between">
          <ProfilePic :src="notification.target.profileImg" small="true" />
          <div>
            <p>
              {{ notification.msg }}
            </p>
            <p class="text-gray-400">
              {{ mostrarFechaAbsolutaORealtiva(notification.date) }}
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
      <div v-else>
        <p>No hay notificaciones por leer</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import IcoBell from "~/assets/icons/actions/bell.svg"
import { userStore } from '~/storages/userStore.js'
import { api_ip } from '~/constants';
import moment from 'moment';
import axios from "axios"

const { notifications } = defineProps(['notifications'])

const store = userStore()
const jwt = store.$state.jwt

const mostrarModalNotificaciones = ref(false)
const hadBeenOpen = ref(false)


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

function handleFocusOut() {
  mostrarModalNotificaciones.value = false
}

function showHideNotifications() {
  hadBeenOpen.value = true
  mostrarModalNotificaciones.value = !mostrarModalNotificaciones.value

  if (mostrarModalNotificaciones.value && store.$state.notifications.length > 0) {
    const ids = store.$state.notifications.map(x => x.id)
    axios.post(`${api_ip}/notifications/seen`, {
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

<style scoped>
.btnBell {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 20px;

  cursor: pointer;

  position: relative;
}

.ball {
  background-color: #ea1212;
  width: 10px;
  height: 10px;
  border-radius: 50%;

  position: absolute;
  bottom: 10px;
  right: 22px;
}

.ico {
  height: 30px;
  width: auto;
  animation: wiggle-infinite 0.5s ease-out;
  animation-delay: 5s;
}



.ico:hover {
  animation: wiggle-infinite 0.5s infinite;

}


.desplegable-notificaciones {
  color: black;
  background-color: white;

  position: absolute;
  top: 100%;
  right: 0%;

  /* margin-top: 30px; */
  padding: 20px;

  width: 500px;
  max-height: 200px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
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


@keyframes wiggle-infinite {
  0% {
    transform: rotate(10deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(20deg);
  }

  75% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>