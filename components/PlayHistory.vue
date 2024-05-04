<template>
    <div class="play-container">
        <table>
            <thead>
                <th>Fecha de la partida</th>
                <th>Tiempo utilizado</th>
                <th>Palabras por minuto</th>
                <th>Número de errores</th>
                <th>% de errores</th>
            </thead>
        </table>
        <div class="table-wrapper">
            <table>
                <tbody class="table-wrapper">
                    <!-- <tr v-if="games.length>0" v-for="game in games">
                        <td>{{ game. }}</td>
                        <td>{{ game. }}</td>
                        <td>{{ game. }}</td>
                        <td>{{ game. }}</td>
                        <td>{{ game. }}</td>
                    </tr>
                    <tr v-else>
                        Cuando juegues las estadísticas de tus partidas aparecerán aquí
                    </tr> -->
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                    <tr>
                        <td>30-04-2024 17:05</td>
                        <td>50s</td>
                        <td>77</td>
                        <td>4</td>
                        <td>2%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
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
</style>
