<template>
    <Modal class="text-black" v-if="isFollowersModalOpen" @close="isFollowersModalOpen = false"
        :title="`Seguidores: ${store.$state.followers.length}`">
        <div class="user-modal-info" v-for="follower in store.$state.followers">
            <ProfilePic :src="follower.profileImg" />
            <div class="flex items-center">
                <p class="ml-3">{{ follower.username }}</p>
            </div>
            <div class="flex items-center justify-end">
                <button v-if="follower.followedBy == false" class="follow-button"
                    @click="followUser(follower.username)">Seguir</button>
                <span v-else>Siguiendo</span>
            </div>
        </div>
    </Modal>
    <Modal class="text-black" v-if="isFriendsModalOpen" @close="isFriendsModalOpen = false"
        :title="`Seguidos: ${store.$state.friends.length}`">
        <div class="user-modal-info" v-for="friend in store.$state.friends">
            <ProfilePic :src="friend.profileImg" />
            <div class="flex items-center">
                <p class="ml-3">{{ friend.username }}</p>
            </div>
            <div class="flex items-center justify-end">
                <button class="follow-button" @click="unfollowUser(friend.username)">Dejar de seguir</button>
                <!-- <span v-else>No te sigue</span> -->
            </div>
        </div>
    </Modal>


    <Modal class="text-black" v-if="isAddUserOpen" @close="isAddUserOpen = false" :title="'Buscador de usuarios'">
        <!-- <input v-model="userSearchInput" @change="searchUser" type="text" -->
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




    <div class="flex items-center justify-end pt-16">
        <!-- <img width="20" class="text-white" src="../assets/icons/svg/circle-user-regular.svg" alt="">
        <span class="text-white text-2xl mr-10" @click="page = 0" style="cursor: pointer;">Profile</span> -->
    </div>
    <section class="mx-24 mt-16" id="profile">
        <div>
            <button :class="{ 'img-opacity': page !== 0 }" class="px-5" @click="page = 0">
                <img class="icon-button" src="../assets/icons/svg/user-solid.svg" alt="">
            </button>

            <button :class="{ 'img-opacity': page !== 1 }" class="px-5" @click="page = 1">
                <img class="icon-button" src="../assets/icons/svg/keyboard-solid.svg" alt="">
            </button>

            <button :class="{ 'img-opacity': page !== 2 }" class="px-5" @click="page = 2">
                <img class="icon-button" src="../assets/icons/svg/gamepad-solid.svg" alt="">
            </button>
            <hr style="width: 95%;">
            <div class="mt-10">
                <!-- <p class="text-white">{{ page }}</p> -->

                <div v-if="page == 0">
                    <div class="flex gap-20">
                        <div class="w-2/12">
                            <label for="file-input" class="file-input-label">
                                <ProfilePic :src="userData.profileImg" big="true" />
                            </label>
                            <input id="file-input" type="file" style="display: none;" @change="upadteProfileImg">
                        </div>
                        <div class="ml-10 flex flex-col justify-center">
                            <div class="w-100 text-2xl flex items-center">
                                <img width="30" src="../assets/icons/svg/hashtag-solid.svg" alt="">
                                <span class="ml-2">Nickname: {{ userData.username }}</span>
                            </div>
                            <div class="w-100 text-2xl flex items-center">
                                <img width="30" src="../assets/icons/svg/at-solid.svg" alt="">
                                <span class="ml-2">Email: {{ userData.email }}</span>
                            </div>
                            <div class="w-100 text-2xl flex items-center">
                                <img width="30" src="../assets/icons/svg/earth-europe-solid.svg" alt="">
                                <span class="ml-2">Rank: 1230</span>
                            </div>

                        </div>
                        <button @click="isFollowersModalOpen = true" class="followers">
                            <div class="info">
                                <p>Seguidores</p>
                                <p class="text-center">{{ store.followers.length }}</p>
                            </div>
                        </button>
                        <button @click="isFriendsModalOpen = true" class="followers">
                            <div class="info">
                                <p>Seguidos</p>
                                <p class="text-center">{{ store.friends.length }}</p>
                            </div>
                        </button>
                    </div>
                    <button @click="confirmDeleteProfile" type="button"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar
                        perfil</button>
                </div>

                <div v-if="page == 1">
                    <PlayHistory />
                </div>

                <div v-if="page == 2">
                    <p>Keyhits</p>
                </div>
            </div>
        </div>
        <div>
            <OnlineFriends />
        </div>
    </section>
</template>

<script setup>













































import axios from "axios"
import Swal from 'sweetalert2'
import Navbar from "~/components/layout/navbar/navbar.vue";
import ProfilePic from "~/components/ProfilePic.vue";
import { ref } from 'vue';
import { userStore } from '../storages/userStore.js'
import Modal from "../components/Modal.vue";
import PlayHistory from "~/components/PlayHistory.vue";
import { api_ip } from "~/constants";
import OnlineFriends from "~/components/OnlineFriends.vue";
//import { refDebounced } from "vue"
import { refDebounced } from '@vueuse/core'


var isFollowersModalOpen = ref(false)
var isFriendsModalOpen = ref(false)
var isAddUserOpen = ref(false)

//var userSearchInput = ref("")
//var userSearchResult = ref([])

const store = userStore()
var jwt = store.$state.jwt
//console.log(jwt)


var userData = store.userInfo

var page = ref(0)

function upadteProfileImg(event) {
    const form = new FormData()
    form.append('image', event.target.files[0])

    axios.post(`${api_ip}/user/editimg`, form, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
        .then(response => {
            console.log(response)
            store.$state.profileImg = response.data.data.url
        })
}

function confirmDeleteProfile() {
    Swal.fire({
        title: 'Quieres que te enviemos un código para eliminar tu cuenta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.isConfirmed) {
            sendDeleteEmail()
            Swal.fire({
                title: 'Por favor, ingresa el código que recibiste en tu correo',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                showLoaderOnConfirm: true,
                preConfirm: (code) => {
                    return axios.post(`${api_ip}/user/confirmdelete`, {
                        code: code,
                        login: store.$state.username
                    })
                        .then(response => {
                            if (!response.data.success) {
                                throw new Error(response.data.message || 'Algo salió mal');
                            }
                            return response.data;
                        })
                        .catch(error => {
                            Swal.showValidationMessage(
                                `Error: código incorrecto`
                            );
                        });
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {

                if (result.isConfirmed) {
                    store.clearUser()
                    navigateTo("/")
                    Swal.fire(
                        '¡Eliminado!',
                        'Tu perfil ha sido eliminado.',
                        'success'
                    )
                }
            });
        }
    });
}

function sendDeleteEmail() {
    axios.post(`${api_ip}/user/delete`, undefined, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
        .then(response => {
            console.log(response)
        })
}


// function deleteProfile() {
//     axios.post(`${api_ip}/user/delete`, {
//         token: jwt.value,
//     })
//         .then(response => {
//             console.log(response)
//         })



//     store.clearUser()
// }


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


const userSearchInput = ref("")
// Resultado de la búsqueda de usuarios
const userSearchResult = ref([])

// Crear un ref debounced que se actualizará después de 500 milisegundos de inactividad
const busquedaUsuari = refDebounced(userSearchInput, 500)

// Observar cambios en el ref debounced y ejecutar la búsqueda de usuarios
watch(busquedaUsuari, (newValue) => {
    console.log("SEARCH ",newValue)
    searchUser(newValue)
})

// Observar cambios en userSearchInput y ejecutar la búsqueda de usuarios automáticamente
watch(userSearchInput, (newValue) => {
    searchUser(newValue)
})

// Función para realizar la búsqueda de usuarios
function searchUser(searchInput) {
    axios.post(`http://${api_ip}/user/search`, {
        search: searchInput
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



// const busquedaUsuari = refDebounced(userSearchInput, 500)
// watch(searchUser, busquedaUsuari)

</script>

<style scoped>
#profile {
    color: white;
    display: grid;
    grid-template-columns: 10fr 2fr;
}

.user-img {
    width: 200px;
    height: 200px;
    min-width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid white;
}


.img-opacity {
    opacity: 50%;
}

.followers {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.followers .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.followers .info p {
    margin: 0px;
}

.followers img {
    width: 50px;
    height: 50px;
}

.modal-img {
    height: 50px;
    width: 50px;
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

.icon-button {
    height: 25px;
    vertical-align: middle;
}

.friend-icon {
    cursor: auto;
    display: flex;
    align-items: center;
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

.online-friends {
    max-height: 300px;
    overflow: scroll;
}
</style>