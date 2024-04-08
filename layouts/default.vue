<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue"
import "../assets/css/main.css"
</script>




<template>
  <div id="fondo" class="h-screen">
    <Navbar />

    <slot />

  </div>
</template>

<style scoped>
#fondo {
    height: 100dvh;
    background: linear-gradient(#000000, #43219B);
}
</style>