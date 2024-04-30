<template>
  <div class="flex items-center justify-end pt-16">
    </div>
  <section class="game mx-24">
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
      <p style="color: white;" class="pr-2 pl-2">{{ wpm.value }} wpm</p>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <p style="color: white;" class="pr-2 pl-2">{{ calcularTiempoTranscurrido() }}s</p>
      <button class="start-button" @keydown="handleKeyPress" @click="startGame">Start</button>
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
    <div class="keyboard">
      <Keyboard />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Keyboard from '~/components/layout/keyboard.vue';

const text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit cursus erat, convallis rutrum elit ullamcorper convallis.');

const textArr = ref(splitText(text))
const wordCount = ref(0)
const charInWordCount = ref(0)
const startTimestamp = ref(null);
const started = ref(false)
const errors = ref(0)
const wpm = ref(0);
textArr.value = splitText(text.value);

// Función para iniciar el juego
function startGame() {
  // Restablecer los valores y el texto
  if (!started.value) {
    startTimestamp.value = Date.now();
    wordCount.value = 0;
    charInWordCount.value = 0;
    errors.value = 0;
    wpm.value = 0;
    textArr.value = splitText(text.value); // Resetear el texto
    started.value = true; // Establecer el estado de inicio a verdadero
  }
  calcularWPM(); // Calcular WPM después de iniciar el juego
}

function calcularTiempoTranscurrido() {
  if (startTimestamp.value === null) {
    return 0;
  }
  return Math.floor((Date.now() - startTimestamp.value) / 1000);
}

// Función para calcular las palabras por minuto (WPM)
function calcularWPM() {
  const tiempo = calcularTiempoTranscurrido();

  // Verificar si ha pasado un tiempo mínimo (por ejemplo, 1 minuto)
  if (tiempo >= 60) {
    const minutos = tiempo / 60;
    wpm.value = Math.round(wordCount.value / minutos);
  } else {
    // Si no ha pasado suficiente tiempo, establecer WPM a 0
    wpm.value = 0;
  }
}

// Llamada a la función calcularWPM
calcularWPM();
console.log(wpm.value); // Imprime las WPM en la consola

//siguiente caracter
function increment() {

  //ch es la posicion del siguiente caracter
  const ch = charInWordCount.value + 1

  if (ch > textArr.value[wordCount.value].length - 1) {
    //si el siguiente caracter esta en la siguiente palabra

    //inicializa el contador dentro de la palabra
    charInWordCount.value = 0

    // si no hay más palabras se ha acabado
    if (wordCount.value >= textArr.value.length - 1) {
      wordCount.value = 0
      started.value = false
      console.log("FINISH", new Date().getTime() - startTimestamp.value);
    } else {

      //siguiente palabra
      wordCount.value++;
    }

  } else {

    //siguiente caracter dentro de la palabra
    charInWordCount.value = ch
  }
}
// presionar tecla
function handleKeyPress(event) {
  //inicializar
  if (!started.value) {
    started.value = true
    startTimestamp.value = new Date().getTime()
    console.log("START")

    textArr.value = splitText(); // Corregir llamada a la función splitText()
    // Iniciar el juego si no ha comenzado
    startGame();
  }

  //texto
  const key = event.key
  const ignoreKeys = ["Shift"]

  if (key === textArr.value[wordCount.value][charInWordCount.value].char) {
    //si la tecla coincide
    increment()

  } else if (!ignoreKeys.includes(key)) {
    //si la tecla no coincide

    //suma 1 al error
    textArr.value[wordCount.value][charInWordCount.value].err++
    errors.value++
  }
  calcularWPM(); // Calcular WPM después de cada pulsación de tecla
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

.selected-word {
  background-color: #97979783;
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
