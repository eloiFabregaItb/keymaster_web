<template>
    <div class="flex items-center justify-end pt-14">
        <img width="20" class="text-white" src="../assets/icons/svg/circle-user-regular.svg" alt="">
        <span class="text-white text-2xl mr-10" @click="page = 0" style="cursor: pointer;">Profile</span>
    </div>
    <section class="m-10" id="profile">
        <div>
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
                <div class="flex">
                    <div class="w-2/12">
                        <label for="file-input" class="file-input-label">
                            <img style="cursor: pointer;" class="user-img":src="userData.profileImg" alt=""
                                @click="handleImageUpload">
                        </label>
                        <input id="file-input" type="file" style="display: none;" @change="handleFileUpload">
                    </div>
                    <div style="flex: 1;" class="ml-10 flex flex-col justify-center">
                        <div class="w-100 text-3xl flex items-center">
                            <img width="30" src="../assets/icons/svg/hashtag-solid.svg" alt="">
                            <span class="ml-2">Nickname: {{ userData.username }}</span>
                        </div>
                        <div class="w-100 text-3xl flex items-center">
                            <img width="30" src="../assets/icons/svg/at-solid.svg" alt="">
                            <span class="ml-2">Email: {{ userData.email }}</span>
                        </div>
                        <div class="w-100 text-3xl flex items-center">
                            <img width="30" src="../assets/icons/svg/earth-europe-solid.svg" alt="">
                            <span class="ml-2">Rank: 1230</span>
                        </div>
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
import { userStore } from '../storages/userStore.js'

const store = userStore()

var userData = store.userInfo

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

.user-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid white;
}
</style>