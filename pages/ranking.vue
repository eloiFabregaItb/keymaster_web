<template>
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
                        <img class="table-icon" src="../assets/icons/actions/lightning2.svg" alt="">
                    </th>
                    <th>
                        <img class="table-icon" src="../assets/icons/svg/BxsError.svg" alt="">
                    </th>
                </thead>
            </table>
            <div class="table-wrapper">
                <table>
                    <tbody class="table-wrapper">
                        <tr>
                            <td>#1</td>
                            <td>Nombre</td>
                            <td>wpm</td>
                            <td>% de errores</td>
                        </tr>
                        <!-- <tr v-for="user in rankingUsers">
                            <td>
                                {{ user. }}
                            </td>
                            <td>
                                <ProfilePic :src="user.profileImg" />
                                {{ user. }}
                            </td>
                            <td>
                                {{ user. }}
                            </td>
                            <td>
                                {{ user. }}
                            </td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProfilePic from '~/components/ProfilePic.vue';
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
</style>
