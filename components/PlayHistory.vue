<template>
    <Modal class="text-black" v-if="isBestPlayModalOpen" @close="isBestPlayModalOpen = false" :title="`Partida`">
        <h1 class="text-5xl my-8">{{ bestPlayModalData.title }} de {{ bestPlayModalData.author }}</h1>
        <span v-for="(letra, index) in bestPlayModalData.textArr" :key="index"
            :class="{ 'text-white bg-red-600': bestPlayModalData.errIndexes.includes(index) }">{{ letra }}</span>
        <p class="mt-8">{{ formatTimeSeconds(bestPlayModalData.time) }} segundos</p>
        <p class="">{{ bestPlayModalData.words }} palabras</p>
        <p class="text-red-600">{{ bestPlayModalData.totalErrors }} errores</p>
    </Modal>
    <div class="play-container">
        <table>
            <thead>
                <tr>
                    <th>Fecha de la partida</th>
                    <th>Tiempo utilizado</th>
                    <th>Palabras por minuto</th>
                    <th>Número de errores</th>
                    <th>% de errores</th>
                    <th>Partida</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="history" v-for="(partida, index) in history" :key="index">
                    <td>{{ formatDate(partida.createdAt) }}</td>
                    <td>{{ formatTimeSeconds(partida.time) }}<small style="font-size: 11px;">{{
        formatTimeMillis(partida.time) }}</small></td>
                    <td>{{ partida.wpm }}</td>
                    <td>{{ partida.totalErrors }}</td>
                    <td>{{ calcularPorcentajeErrores(partida) }}</td>
                    <td>
                        <button @click="openBestPlayModal(partida)" class="view-best-play">
                            <EyeSearch />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { userStore } from '../storages/userStore.js'
import { api_ip } from '~/constants';
import Modal from '~/components/Modal.vue';
import EyeSearch from '~/assets/icons/actions/eyeSearch.svg';

const { historyData } = defineProps(['historyData'])

var isBestPlayModalOpen = ref(false)
var bestPlayModalData = ref({});

const store = userStore()
var jwt = store.$state.jwt
const history = ref([]);

watch(() => {
    history.value = historyData
}, historyData)

function openBestPlayModal(partida) {
    bestPlayModalData.value = partida;
    bestPlayModalData.value.textArr = partida.text.split("");
    bestPlayModalData.value.errIndexes = Object.keys(partida.errors).map(Number);
    isBestPlayModalOpen.value = true;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
}

function formatTimeSeconds(milliseconds) {
    const seconds = milliseconds / 1000;
    const formattedSeconds = Math.floor(seconds);
    return formattedSeconds.toLocaleString('es-ES', { minimumFractionDigits: 0 });
}

function formatTimeMillis(milliseconds) {
    const seconds = milliseconds / 1000;
    const formattedSeconds = Math.floor((seconds - Math.floor(seconds)) * 1000);
    return formattedSeconds.toLocaleString('es-ES', { minimumFractionDigits: 0 });
}

function calcularPorcentajeErrores(partida) {
    return ((partida.totalErrors / partida.length) * 100).toFixed(2) + "%";
}
</script>

<style scoped>
.play-container {
    width: 95%;
    text-align: center;
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

.view-best-play {
    background-color: #43219B;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
</style>
