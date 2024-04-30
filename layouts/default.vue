<script setup lang="ts">
import "../assets/css/main.css"
</script>

<template>
  <div id="fondo">
    <slot />
  </div>
</template>

<style scoped>
#fondo {
  /* height: 100% !important; */
  background: linear-gradient(#000000, #43219B);
  height: 100dvh;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
}
</style>