<script setup lang="ts">
import "../assets/css/main.css"

import { userStore } from '~/storages/userStore.js'
import Navbar from "~/components/layout/navbar/navbar.vue";
import Footer from "~/components/layout/footer.vue";

const store = userStore()

//console.log(store)

</script>

<template>
  <div class="fondo">
    <Navbar />
    <div class="scroller">
      <div class="content">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>


<style scoped>
.fondo {
  background: linear-gradient(#000000, #43219B);
  height: 100dvh;
  width: 100vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}

.scroller {
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  max-width: 1500px;

  width: 100%;

  margin: 0 auto;
}

.content {
  margin: 0 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
}
</style>

<style>
.content>div {
  height: 100%;
}

.content>div:has(.login),
.content>div:has(.register) {

  display: flex;
  justify-content: center;
}
</style>