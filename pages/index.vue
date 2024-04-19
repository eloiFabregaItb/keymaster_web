<template>
   <div class="flex flex-col min-h-screen">
      <Navbar2 v-if="loggedin==true"/>
      <Navbar v-else/>
      <div class="content flex-grow">
         <div class="container">
            <div class="centered">
               <Keyword />
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script setup>
import Navbar from "~/components/layout/navbar.vue";
import Navbar2 from "~/components/layout/navbar2.vue";
import Keyword from "~/components/layout/keyword.vue";
import Footer from "~/components/layout/footer.vue";
import "../assets/css/main.css";

var loggedin = ref(true)
</script>

<style>
.content {
   flex: 1;
}

.container {
   display: flex;
   align-items: center;
   justify-content: center;
   height: calc(100% - 4rem);
}

.centered {
   display: flex;
   align-items: center;
   justify-content: center;
   display: inline-block;
}

svg {
   color: white;
}
</style>
