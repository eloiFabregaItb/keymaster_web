<template>
    <div class="flex items-center justify-end pt-14">
        <img width="20" class="text-white" src="../assets/icons/svg/circle-user-regular.svg" alt="">
        <span class="text-white text-2xl mr-10" @click="page = 0" style="cursor: pointer;">Profile</span>
    </div>
    <section class="m-10" id="profile">
        <div class="bg-red-600">
            <button class="px-5" @click="page = 1">
                <img width="30" src="../assets/icons/svg/keyboard-solid.svg" alt="">
            </button>

            <button class="px-5" @click="page = 2">
                <img width="30" src="../assets/icons/svg/gamepad-solid.svg" alt="">
            </button>


        </div>
        <div class="bg-green-400">

        </div>
        <div class="mt-10">
            <p class="text-white">{{ page }}</p>
    
            <div v-if="page == 0">
                <div class="flex bg-blue-900">
                    <div class="w-3/12">
                        foto
                    </div>
                    <div class="w-9/12">
                        datos
                    </div>
                </div>
            </div>
    
            <div v-if="page == 1">
                <p>History</p>
            </div>
    
            <div v-if="page == 2">
                <p>keyhits</p>
            </div>
        </div>
    </section>





</template>

<script setup>
import { ref } from 'vue';

var page = ref(0)
</script>

<style scoped>
* {
    color: white;
}

#profile {
    display: grid;
    grid-template-columns: 10fr 2fr;
}
</style>