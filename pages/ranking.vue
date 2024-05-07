<template>
    <Modal class="text-black" v-if="isBestPlayModalOpen" @close="isBestPlayModalOpen = false"
        :title="`Mejor partida de ${bestPlayModalData.username}`">
        <!-- <pre>{{ bestPlayModalData }}</pre> -->
        <h1 class="text-3xl my-8">{{ bestPlayModalData.history[0].title }} de {{ bestPlayModalData.history[0].author }}</h1>


        <!-- <p class="text-2xl mb-8">{{ bestPlayModalData.history[0].text }}</p> -->
        <span v-for="(letra, index) in bestPlayModalData.history[0].textArr" :key="index" :class="{ 'text-white bg-red-600': bestPlayModalData.history[0].errIndexes.includes(index) }">{{ letra }}</span>


        <p class="mt-8">{{ formatTime(bestPlayModalData.history[0].time) }} segundos</p>
        <p class="">{{ bestPlayModalData.history[0].words }} palabras</p>
        <p class="text-red-600">{{ bestPlayModalData.history[0].totalErrors }} errores</p>
    </Modal>
    <div class="mx-24 mt-16 text-white">
        <h1 class="text-2xl font-black">Ránking de los mejores jugadores de KeyMaster</h1>
        <div class="play-container">
            <table>
                <thead>
                    <th>
                        <img class="table-icon" src="../assets/icons/svg/Podium.svg" alt="">
                    </th>
                    <th>
                        <img class="table-icon" src="../assets/icons/svg/circle-user-regular.svg" alt="">
                    </th>
                    <th>
                        <img class="table-icon" src="../assets/icons/actions/lightning2.svg" alt=""> wpm
                    </th>
                    <th>
                        <img class="table-icon" src="../assets/icons/svg/BxsError.svg" alt=""> errores
                    </th>
                    <th>
                        Mejor partida
                    </th>
                </thead>
            </table>
            <!-- <pre>
                {{ ranking }}
            </pre> -->
            <div class="table-wrapper">
                <table>
                    <tbody class="table-wrapper">
                        <tr v-for="(user, index) in ranking">
                            <td>
                                #{{ index+1 }}
                            </td>
                            <td>
                                <div class="flex justify-center items-center ">
                                    <ProfilePic :src="user.profileImg" />
                                    <span class="ml-3">{{ user.username }}</span>
                                </div>
                            </td>
                            <td>
                                {{ user.history[0].wpm }}
                            </td>
                            <td>
                                {{ user.history[0].totalErrors }}
                            </td>
                            <td>
                                <button @click="isBestPlayModalOpen = true; loadBestPlay(user)" class="view-best-play">VER MEJOR PARTIDA</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProfilePic from '~/components/ProfilePic.vue';
import axios from 'axios';
import { api_ip } from '~/constants';
import Modal from '~/components/Modal.vue';

var isBestPlayModalOpen = ref(false)
var bestPlayModalData = ref([])

const ranking = ref([])

function getRanking(){
    axios.get(`${api_ip}/play/ranking`)
        .then(response => {
            console.log(response)
            ranking.value = response.data.data
        })
        .catch(error => {
            console.error(error);
        });
}
getRanking()

function loadBestPlay(data){
    bestPlayModalData.value = data
    bestPlayModalData.value.history = bestPlayModalData.value.history.map(h=>({...h,textArr:h.text.split(""),errIndexes:Object.keys(h.errors).map(Number)}))
    console.log(bestPlayModalData.value)

}

function formatTime(milisegundos){
    const segundos = milisegundos / 1000
    const segundosFormateados = segundos.toLocaleString('es-ES', {minimumFractionDigits: 3});
    
    return segundosFormateados;
}

</script>

<style scoped>
.play-container {
    width: 95%;
    text-align: center;
    margin-top: 40px;
}

.table-wrapper {
    max-height: 65vh;
    overflow-y: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border-left: 1px solid #dddddd33;
    border-right: 1px solid #dddddd33;
    border-bottom: 1px solid white;
    padding: 8px;
    text-align: center;
    width: 20%;
}

th {
    background-color: white;
    color: #43219B;
}

.table-icon {
    height: 40px;
    display: block;
    margin: auto;
}

.view-best-play {
    background-color: #43219B;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
</style>
