<template>
   <div class="flex flex-col min-h-screen">
      <Navbar />
      <div class="content flex-grow">
         <div class="">
            <div class="">
               <Keyword />
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script setup>
import Navbar from "~/components/layout/navbar.vue";
import Keyword from "~/components/layout/keyword.vue";
import Footer from "~/components/layout/footer.vue";
import "../assets/css/main.css";
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
</style>
