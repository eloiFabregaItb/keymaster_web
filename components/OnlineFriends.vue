<template>
    <Modal class="text-black" v-if="isAddUserOpen" @close="isAddUserOpen = false" :title="'Buscador de usuarios'">
        <input v-model="userSearchInput" type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Busca un usuario..." />
        <div v-if="userSearchResult.length > 0" class="user-modal-info" v-for="user in userSearchResult">
            <ProfilePic :src="user.profileImg" />
            <div class="flex items-center">
                <p class="ml-3">{{ user.username }}</p>
            </div>
            <div class="flex items-center justify-end">
                <button v-if="user.following" class="follow-button" @click="unfollowUser(user.username)">Dejar de
                    seguir</button>
                <button v-else class="follow-button" @click="followUser(user.username)">Seguir</button>
                <!-- <span v-else>No te sigue</span> -->
            </div>
        </div>
        <div v-else>
            <p>No se han encontrado resultados</p>
        </div>
    </Modal>
    <Modal class="text-black" v-if="isPlayVersusModalOpen" @close="isPlayVersusModalOpen = false">
        <h1 class="mb-10">La funcionalidad de jugar contra amigos estará disponible próximamente, de mientras puedes
            seguir jugando al modo contrarreloj o practicando con el modo zen.</h1>
        <nuxt-link class="play-button" to="/">
            JUGAR
        </nuxt-link>
    </Modal>
    <div class="flex justify-between">
        <button class="friend-icon">
            <IcoFaSolidUserFriends class="icon-button" />
            <span class="ml-2.5 text-2xl">Friends</span>
        </button>
        <button @click="isAddUserOpen = true">
            <IcoFluentMdl2AddFriend class="icon-button" />
        </button>
    </div>
    <hr>

    <div class="my-1.5 online-friends" v-for="friend in store.$state.friends">
        <div class="flex justify-between items-center">
            <IcoOnlineCircle class="online-state-icon" v-if="friend.online" />
            <IcoOfflineCircle class="online-state-icon" v-else />
            <span>{{ friend.username }}</span>
            <IcoPlayIcon class="play-icon mr-2.5" @click="isPlayVersusModalOpen = true" />
        </div>
    </div>
</template>

<script setup>

import IcoFaSolidUserFriends from "../assets/icons/svg/FaSolidUserFriends.svg"
import IcoFluentMdl2AddFriend from "../assets/icons/svg/FluentMdl2AddFriend.svg"
import IcoOnlineCircle from "../assets/icons/svg/OnlineCircle.svg"
import IcoOfflineCircle from "../assets/icons/svg/OfflineCircle.svg"
import IcoPlayIcon from "../assets/icons/svg/PlayIcon.svg"

import axios from "axios"
import Modal from './Modal.vue';
import { userStore } from '../storages/userStore.js'
import { api_ip } from "~/constants";
import debounce from 'lodash.debounce'
import { ref, watch } from 'vue'

const store = userStore()
var jwt = store.$state.jwt
var isAddUserOpen = ref(false)
var isPlayVersusModalOpen = ref(false)
var userSearchInput = ref("")
var userSearchResult = ref([])

function followUser(username) {
    axios.post(`${api_ip}/user/follow`, {
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
    axios.post(`${api_ip}/user/unfollow`, {
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

function searchUser(searchInput) {
    axios.post(`${api_ip}/user/search`, {
        search: searchInput.value
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
watch(userSearchInput, debounce(() => {
    searchUser(userSearchInput)
}, 100))

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

.play-button {
    color: #43219B;
}
</style>