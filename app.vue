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
import axios from "axios"
import Socket from "./composables/Socket.vue"
</script>
