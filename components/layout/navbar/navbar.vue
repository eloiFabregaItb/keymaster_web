<script setup>
</script>

<template>
  <nav class="navbar">
    <nuxt-link to="/" class="logo" @click="hideNavbar">
      <img width="250" src="~/assets/icons/logo/logo.png" alt="Key Master">
    </nuxt-link>

    <div class="blurbg" :class="{ open: isOpen }" @click="hideNavbar" />
    <div class="links" :class="{ open: isOpen }">
      <ul class="left">

        <li>
          <nuxt-link to="/info" @click="hideNavbar">
            <navbarBtn :srcIco="IcoInfo">Info</navbarBtn>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ranking" @click="hideNavbar">
            <navbarBtn :srcIco="IcoRanking">Ranking</navbarBtn>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/guide" @click="hideNavbar">
            <navbarBtn :srcIco="IcoGuide">Guide</navbarBtn>
          </nuxt-link>
        </li>
      </ul>
      <ul class="right">

        <!-- NO LOGGED -->
        <li v-if="!isOnline">
          <nuxt-link to="/register" @click="hideNavbar">
            <navbarBtn :srcIco="IcoRegister">Register</navbarBtn>
          </nuxt-link>
        </li>
        <li v-if="!isOnline">
          <nuxt-link to="/login" @click="hideNavbar">
            <navbarBtn :srcIco="IcoLogin">Login</navbarBtn>
          </nuxt-link>
        </li>

        <!-- LOGGED -->
        <li v-if="isOnline">
          <nuxt-link to="/profile">
            <div class="userCard">
              <img class="navbar-user-img" :src="userData.profileImg" alt="">
              ¡Hola, <b>{{ userData.username }}</b>!
            </div>
          </nuxt-link>
        </li>
        <li v-if="isOnline">
          <BellBtn :notifications="userData.notifications" />
        </li>
        <li v-if="isOnline">
          <nuxt-link to="/" @click="logout">
            <navbarBtn :srcIco="IcoLogout">Logout</navbarBtn>
          </nuxt-link>
        </li>

      </ul>
    </div>


    <BurgerBtn class="burger" @click="handleOpen" :isOpen="isOpen" />

  </nav>
</template>

<script setup>

import navbarBtn from "~/components/layout/navbar/navbarBtn.vue"
import IcoInfo from "~/assets/icons/actions/info.svg"
import IcoRanking from "~/assets/icons/actions/ranking.svg"
import IcoGuide from "~/assets/icons/actions/guide.svg"
import IcoRegister from "~/assets/icons/actions/register.svg"
import IcoLogin from "~/assets/icons/actions/login.svg"
import IcoLogout from "~/assets/icons/actions/logout.svg"

import BurgerBtn from "~/components/layout/navbar/burgerBtn.vue"
import BellBtn from "~/components/layout/navbar/bellBtn.vue"

import { userStore, isOnline } from '~/storages/userStore.js'

const store = userStore()
var userData = ref()

const isOpen = ref(false)

watch(()=>{
  userData.value = store.userInfo
  // console.log("isOnline",isOnline.value,userData)
  // console.log("NOTIFICATIONS",store.notifications)
},isOnline)

function handleOpen() {
  isOpen.value = !isOpen.value
}

function hideNavbar(){
  isOpen.value = false
}


function logout() {
  store.clearUser()
  navigateTo('/')
}

</script>


<style scoped>
.navbar {
  position: relative;
  height: 70px;

  width: 100%;
  z-index: 20;

  display: flex;
  color: white;
  justify-content: space-between;

  /* padding: 0 1.5rem; */
  gap: .5rem;
}

.navbar .logo {
  margin-left: 1.5rem;
  z-index: 24;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar .logo img {
  height: 70%;
  width: auto;
}


.navbar .links {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .left,
.navbar .right {
  display: flex;
  gap: 5px;
}

.navbar .links .left li,
.navbar .links .right li {
  display: flex;
  align-items: center;
  justify-content: center;
}


.blurbg {
  position: absolute;
  top: -2000%;

  width: 100%;
  height: 100dvh;

  transition: all .7s ease;
}

.blurbg.open {
  backdrop-filter: blur(10px);

}

.burger {
  display: none;
}



.userCard {
  display: flex;
  align-items: center;
}

.navbar-user-img {
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid white;
  margin-right: 5px;
}


@media (width<750px) {
  .burger {
    display: flex;
  }

  .navbar .links,
  .navbar .left,
  .navbar .right {
    flex-direction: column;
  }

  .blurbg.open {
    top: 0;
  }

  .navbar .links {
    width: 100%;
    position: absolute;
    top: -1000%;

    transition: all .7s ease;


  }

  .navbar .links ul {
    width: 100%;
  }

  .links.open {
    top: 100%;
  }

  .links.open li a {
    flex: 1;
    margin: 0 2rem;
  }
}
</style>