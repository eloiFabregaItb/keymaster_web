<template>
  <div>
    <NuxtLayout>
      <Socket>
        <NuxtPage />
      </Socket>
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Key Master',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})


import axios from "axios";
import Socket from "./composables/Socket.vue"

import { userStore } from "./storages/userStore.js"
import { api_ip } from "./constants";

const store = userStore()


async function tryAutoLogin() {
  const token = localStorage.getItem('jwt');
  console.log("TOKEN", token)

  if (!token) return

  try {

    const response = await axios.post(`${api_ip}/auth/loginjwt`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.data.success) {
      localStorage.setItem('jwt', response.data.jwt);

      console.log("AUTOLOGIN")

      store.updateUser({
        email: response.data.email,
        username: response.data.username,
        profileImg: response.data.profileImg,
        emailVerified: response.data.emailVerified,
        jwt: response.data.jwt,
        isLogged: true,
        friends: response.data.friends,
        followers: response.data.followers,
        notifications: response.data.notifications
      })

    } else {
      console.log("USER NOT LOGGED")
      // localStorage.removeItem("jwt")
    }

  } catch (error) {

    console.error(error)
    console.log("USER NOT LOGGED")
    // localStorage.removeItem("jwt")
  }

}

tryAutoLogin()


</script>
