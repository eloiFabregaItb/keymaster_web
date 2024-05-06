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


import Socket from "./composables/Socket.vue"


</script>
