<template>
  <div class="flex items-center justify-end pt-16">
  </div>
  <section class="game mx-24 mt-16">
    <div class="flex items-center justify-end pr-20 pb-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
      <p style="color: white;" class="pr-2 pl-2"> {{ errors }} errors </p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
      <p style="color: white;" class="pr-2 pl-2">
        {{ wpm !== Infinity ? (wpm.toFixed(2) + ' wpm') : 'Calculando...' }}
      </p>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <p style="color: white;" class="pr-2 pl-2">{{ calcularTiempoTranscurrido() }}s</p>
      <button class="start-button" @keydown="handleKeyPress" @click="gameInProgress ? handleRestart() : startGame()">
        {{ gameInProgress ? 'Restart' : 'Start' }}
      </button>
    </div>
    <hr style="width: 95%;">

    <div class="bg-green-400">

    </div>
    <div class="items-start">
      <div class="text-style mt-5 mb-5 text-white">
        <div class="text-container">
          <div v-for="(word, index) in textArr" :key="index" class="word"
            :class="{ 'selected-word': index === wordCount }">
            <span v-for="(char, charIndex) in word" :key="charIndex" :class="{
              'selected-char': index === wordCount && charIndex === charInWordCount,
              'error': char.err,
              'space-dot': char.show === '·'
            }">
              {{ char.show || char.char }}
            </span>

          </div>
        </div>
      </div>
    </div>
    <div class="keyboard text-keyword flex-col">
      <div class="row" v-for="(row, rowIndex) in keyboardLayout" :key="rowIndex">
        <div v-for="(key, keyIndex) in row" :key="keyIndex"
          :class="['key', { 'key-active': activeKey === key.toLowerCase() || activeKey === key.toUpperCase(), 'key-pressed': pressedKeys[key.toLowerCase()] }, { 'space-key': key === 'Space' }, { 'backspace-key': key === 'Backspace' }]"
          @click="handleKeyClick(key)">
          {{ key }}
        </div>
      </div>
    </div>
    <div class="keyboard">
      <div class="row">
        <div class="key">Q</div>
        <div class="key">W</div>
        <div class="key">E</div>
        <div class="key">R</div>
        <div class="key">T</div>
        <div class="key">Y</div>
        <div class="key">U</div>
        <div class="key">I</div>
        <div class="key">O</div>
        <div class="key">P</div>
      </div>
      <div class="row">
        <div class="key">A</div>
        <div class="key">S</div>
        <div class="key">D</div>
        <div class="key">F</div>
        <div class="key">G</div>
        <div class="key">H</div>
        <div class="key">J</div>
        <div class="key">K</div>
        <div class="key">L</div>
      </div>
      <div class="row">
        <div class="key">Z</div>
        <div class="key">X</div>
        <div class="key">C</div>
        <div class="key">V</div>
        <div class="key">B</div>
        <div class="key">N</div>
        <div class="key">M</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit cursus erat, convallis rutrum elit ullamcorper convallis.');
const textArr = ref(splitText(text))
const wordCount = ref(0)
const charInWordCount = ref(0)
const startTimestamp = ref(Date.now());
const started = ref(false)
const errors = ref(0)
const wpm = ref(0)
const gameInProgress = ref(false);

function startGame() {
  if (!gameInProgress.value) {
    startTimestamp.value = Date.now();
    gameInProgress.value = true;
    wordCount.value = 0;
    charInWordCount.value = 0;
    errors.value = 0;
    wpm.value = 0;
    textArr.value = splitText(text.value); // Reset the text
  }
}

function handleRestart() {
  gameInProgress.value = false; // Set the game as not in progress
  // Reset all necessary variables to start the game again
  wordCount.value = 0;
  charInWordCount.value = 0;
  errors.value = 0;
  wpm.value = 0;
  textArr.value = splitText(text.value); // Reset the text
  startGame(); // Start the game again
}

// Función para calcular el tiempo transcurrido en segundos
function calcularTiempoTranscurrido() {
  return Math.floor((Date.now() - startTimestamp.value) / 1000);
}

//siguiente caracter
function increment() {
  if (!gameInProgress.value) return; // Si el juego no está en curso, salir de la función
  //ch es la posicion del siguiente caracter
  const ch = charInWordCount.value + 1;

  if (ch > textArr.value[wordCount.value].length - 1) {
    //si el siguiente caracter está en la siguiente palabra

    //inicializa el contador dentro de la palabra
    charInWordCount.value = 0;

    // si no hay más palabras se ha acabado
    if (wordCount.value >= textArr.value.length - 1) {
      started.value = false;
      const tiempoTranscurrido = calcularTiempoTranscurrido(); // Tiempo transcurrido en segundos
      console.log("Tiempo transcurrido:", tiempoTranscurrido, "segundos");
      calcularWPM(); // Calcular WPM
      return;
    } else {
      //siguiente palabra
      wordCount.value++;
    }
  } else {
    //siguiente caracter dentro de la palabra
    charInWordCount.value = ch;
  }
}

// presionar tecla
function handleKeyPress(event) {
  if (!gameInProgress.value) return; // Si el juego no está en curso, salir de la función
  // Inicializar
  if (!started.value) {
    started.value = true;
    startTimestamp.value = Date.now();
    console.log("START");
    textArr.value = splitText(text.value); // Reiniciar los errores
  }

  // Tecla
  const key = event.key;
  const ignoreKeys = ["Shift"];

  if (key === textArr.value[wordCount.value][charInWordCount.value].char) {
    // Si la tecla coincide
    increment();
  } else if (!ignoreKeys.includes(key)) {
    // Si la tecla no coincide
    textArr.value[wordCount.value][charInWordCount.value].err++;
    errors.value++;
  }

  // Calcular WPM después de un tiempo suficiente
  setTimeout(calcularWPM, 5000); // Llamar a calcularWPM después de 5 segundos
}


//separa el texto en un array tipo
//[["h","o","l","a"],[" "],["m","u","n","d","o"]]
function splitText() {
  const textArr = []

  const words = text.value.split(" ")

  for (let i = 0; i < words.length; i++) {
    textArr.push(words[i].split("").map(x => ({ char: x, err: 0 })))
    if (i < words.length - 1) {
      textArr.push([{ char: " ", show: "·", err: 0 }])
    }
  }

  return textArr
}

// Función para calcular los WPM
function calcularWPM() {
  const palabras = text.value.trim().split(/\s+/).length;
  const tiempo = Date.now() - startTimestamp.value;

  // Verificar si ha pasado un tiempo mínimo (por ejemplo, 5 segundos)
  if (tiempo >= 1000) {
    const minutos = tiempo / 60000;
    wpm.value = palabras / minutos;
  } else {
    // Si no ha pasado suficiente tiempo, mostrar un mensaje o establecer un valor predeterminado
    wpm.value = 0; // O cualquier otro valor que desees mostrar en este caso
  }
}

</script>


<style scoped>
@font-face {
  font-family: 'JetBrains Mono';
  src: url('~/assets/fonts/JetBrainsMonoNL-Thin.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  overflow-y: hidden;
  /* Oculta el scroll vertical */
}

.game {
  margin-right: 22rem;
}


.text-container {
  display: flex;
  flex-wrap: wrap;
}

.space-dot {
  color: rgb(95, 95, 95);
}

.text-style {
  color: white;
  font-size: 35px;
  font-family: 'JetBrains Mono', monospace;
  width: 95%;
}

.keyboard {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  margin-bottom: 5px;
}

.key {
  width: 70px;
  height: 70px;
  background-color: #ccc;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.space-key {
  flex-grow: 3;
}

.backspace-key {
  flex-grow: 0.25;
}

.key-active {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

.selected-word {
  background-color: #929292;

}

.selected-char {
  border-bottom: 4px solid rgb(21, 255, 0);
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  background-color: #333;
  gap: 3px;
}

.word {
  display: flex;
}

.word span {
  text-align: center;
  display: block;
  padding: 0 2px;
}


.word span.error {
  background-color: #b33434;
}

.start-button {
  color: rgb(255, 255, 255);
  background-color: #6036d6;
  border: none;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition-duration: 0.4s;
}

.start-button:hover {
  background-color: white;
  color: #6036d6;
}
</style>
