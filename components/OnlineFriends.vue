<template>
    <Modal class="text-black" v-if="isAddUserOpen" @close="isAddUserOpen = false"
        :title="'Buscador de usuarios'">
        <input v-model="userSearchInput" @change="searchUser" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca un usuario..."/>
        <div v-if="userSearchResult.length>0" class="user-modal-info" v-for="user in userSearchResult">
            <ProfilePic :src="user.profileImg" />
            <div class="flex items-center">
                <p class="ml-3">{{ user.username }}</p>
            </div>
            <div class="flex items-center justify-end">
                <button v-if="user.following" class="follow-button" @click="unfollowUser(user.username)">Dejar de seguir</button>
                <button v-else class="follow-button" @click="followUser(user.username)">Seguir</button>
                <!-- <span v-else>No te sigue</span> -->
            </div>
        </div>
        <div v-else>
            <p>No se han encontrado resultados</p>
        </div>
    </Modal>
    <div class="flex justify-between">
        <button class="friend-icon">
            <img class="icon-button" src="../assets/icons/svg/FaSolidUserFriends.svg" alt="">
            <span class="ml-2.5 text-2xl">Friends</span>
        </button>
        <button @click="isAddUserOpen = true">
            <img class="icon-button" src="../assets/icons/svg/FluentMdl2AddFriend.svg" alt="">
        </button>
    </div>
    <hr>

    <div class="my-1.5 online-friends" v-for="friend in store.$state.friends">
        <div class="flex justify-between items-center">
            <img class="online-state-icon" v-if="friend.online" src="../assets/icons/svg/OnlineCircle.svg"
                alt="">
            <img class="online-state-icon" v-else src="../assets/icons/svg/OfflineCircle.svg" alt="">
            <span>{{ friend.username }}</span>
            <img class="play-icon mr-2.5" src="../assets/icons/svg/PlayIcon.svg" alt="">
        </div>
    </div>
</template>

<script setup>
import axios from "axios"
import Modal from './Modal.vue';
import { userStore } from '../storages/userStore.js'
import { api_ip } from "~/constants";
const store = userStore()
var jwt = store.$state.jwt
var isAddUserOpen = ref(false)
var userSearchInput = ref("")
var userSearchResult = ref([])

function followUser(username) {
    axios.post(`http://${api_ip}/user/follow`, {
        follow: username
    }, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
        .then(response => {
            store.$state.followers = response.data.data.followers
            store.$state.friends = response.data.data.friends
        })
        .catch(error => {
            console.error(error);
        });
}

function unfollowUser(username) {
    axios.post(`http://${api_ip}/user/unfollow`, {
        unfollow: username
    }, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
        .then(response => {
            store.$state.friends = response.data.data.friends
            store.$state.followers = response.data.data.followers
        })
        .catch(error => {
            console.error(error);
        });
}

function searchUser(){
    axios.post(`http://${api_ip}/user/search`, {
        search: userSearchInput.value
    }, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
        .then(response => {
            console.log(response)
            userSearchResult.value = response.data.data.users
        })
        .catch(error => {
            console.error(error);
        });
}

</script>

<style scoped>
.friend-icon {
    cursor: auto;
    display: flex;
    align-items: center;
}

.icon-button {
    height: 25px;
    vertical-align: middle;
}

.online-friends {
    max-height: 300px;
    overflow: scroll;
}

.online-state-icon {
    height: 15px;
    width: 15px;
}

.play-icon {
    height: 20px;
    width: 20px;
    cursor: pointer;
}

.user-modal-info {
    display: grid;
    grid-template-columns: 1fr 5fr 3fr;
    margin: 10px 0 10px 0;
    overflow: scroll;
}

.follow-button {
    background-color: #43219B;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
</style>