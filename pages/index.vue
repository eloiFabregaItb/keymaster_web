<template>
   <div class="content">
      <Keyword />
      <!-- <div class="barraLateral">
         barraLateralAqui
      </div> -->
   </div>
</template>

<script setup>
import Keyword from "~/components/game/keyword.vue";
import "../assets/css/main.css";

</script>

<style scoped>
.content {
   display: flex;
   justify-content: center;
   align-items: center
}

.barraLateral {
   width: 300px;
   height: 100%;
   background-color: blue;
}
</style>
