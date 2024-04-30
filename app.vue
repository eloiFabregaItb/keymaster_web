<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import axios from "axios"

// console.log(localStorage)
// if (localStorage.jwt) {
//   console.log(localStorage.jwt)
//   axios.post('http://172.30.5.61:3000/auth/loginjwt', undefined, {
//     headers: {
//       Authorization: `Bearer ${localStorage.jwt}`
//     }
//   })
//   // .then(response => {
//   //   console.log('INICIA SESION')
//   //   console.log(response)
//   // })
// }

</script>
