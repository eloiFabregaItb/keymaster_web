<template>
    <div>
        <label for="full_name">Full name</label>
        <input type="text" id="full_name" v-model="userSearch">
    </div>
    <p class="text-white">{{ userSearchResult }}</p>
</template>

<script setup>
import { ref, watch } from 'vue'
import debounce from 'lodash.debounce'
import { userStore } from '../storages/userStore.js'
import axios from "axios"
import { api_ip } from '~/constants'

const store = userStore()
var jwt = store.$state.jwt
const userSearchInput = ref("")
const userSearchResult = ref([])

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
    //console.log('Send API request')
    searchUser(userSearchInput)
}, 1000))
</script>