<template>
   <div class="content">
      <Navbar />
      <div class="container">
         <div class="centered">
            <Keyword />
         </div>
      </div>
   </div>
</template>
 
<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
import Keyword from "~/components/layout/keyword.vue";
import "../assets/css/main.css";
</script>
 
<style>
.container {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
}

.centered {
   display: inline-block;
   /* Allows centering using text-align */
}
</style>
 