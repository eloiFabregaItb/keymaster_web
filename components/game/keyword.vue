<template>
  <section class="game">

    <div class="information">


      <div class="stat">
        <IcoError />
        <p style="color: white;" class="pr-2 pl-2"> {{ errors }} errors </p>
      </div>

      <div class="stat">
        <IcoWPM />
        <p style="color: white;" class="pr-2 pl-2">{{ wpm }} wpm</p>
      </div>

      <div class="stat">
        <IcoTime />
        <p style="color: white;" class="pr-2 pl-2">{{ ellapsed || 0 }} s</p>
      </div>

    </div>

    <button class="button-wrapper" @keydown="handleKeyPress" @click="startGame" @focusout="handleExitGame" autofocus>

      <div class="start-alert">
        Pulsa para empezar a jugar
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
    </button>
  </section>
</template>

<script setup>
import IcoError from "~/assets/icons/actions/error.svg"
import IcoWPM from "~/assets/icons/actions/lightning.svg"
import IcoTime from "~/assets/icons/actions/time.svg"

import { ref } from 'vue'
import Keyboard from '~/components/game/keyboard.vue';
import { splitText } from './splitWords';
import axios from 'axios';
import { api_ip } from '~/constants';
import { getErrorsForWords } from './splitWords.js';

const ignoreKeys = ["Shift", "Alt", "Control", "CapsLock", "Tab", "Escape", "Backspace", "Delete", "Enter", "ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown", "Home", "PageUp", "PageDown", "End", "AltGraph", "Insert", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]

const text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit cursus erat, convallis rutrum elit ullamcorper convallis.');
const texts = ref([])
const textArr = ref(splitText(text.value))
const wordCount = ref(0)
const charInWordCount = ref(0)
const startTimestamp = ref(null);
const started = ref(false)
const errors = ref(0)
const wpm = ref(0);
const words = ref(text.value.split(" ").length)
const ellapsed = ref("")
// textArr.value = splitText(text.value);

async function fetchTexts() {
  const response = await axios.get(`${api_ip}/play/newtext`)
  const arr = [...response.data.data]
  const str = arr.pop()
  texts.value = arr
  text.value = str
  textArr.value = splitText(str)
  words.value = str.split(" ").length
}
fetchTexts()

async function reload() {

  wordCount.value = 0;
  charInWordCount.value = 0;

  if (texts.value.length > 0) {
    const str = texts.value.pop()
    text.value = str
    textArr.value = splitText(str)
    words.value = str.split(" ").length
  } else {
    await fetchTexts()
  }

}

function updateTimer() {
  if (started.value && startTimestamp.value) {
    const seconds = (Date.now() - startTimestamp.value) / 1000
    ellapsed.value = seconds.toFixed(3)
    wpm.value = Math.floor(wordCount.value / (seconds / 60))
    setTimeout(updateTimer, 7)
  }
}


function handleExitGame() {
  started.value = false
}

// Función para iniciar el juego
function startGame() {
  // Restablecer los valores y el texto
  if (!started.value) {
    wordCount.value = 0;
    charInWordCount.value = 0;
    errors.value = 0;
    wpm.value = 0;
    startTimestamp.value = Date.now();
    textArr.value = splitText(text.value) // reinicia las letras con error
    // words.value = str.split(" ").length
  }
}


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
      const time = new Date().getTime() - startTimestamp.value
      handleFinisih(time)
      reload()
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

  if (!started.value) {
    //START
    started.value = true
    startTimestamp.value = new Date().getTime()
    textArr.value = splitText(text.value);
    startGame();
    updateTimer()
  }

  const key = event.key


  if (key === textArr.value[wordCount.value][charInWordCount.value].char) {
    //si la tecla coincide
    increment()
    event.preventDefault()

  } else if (!ignoreKeys.includes(key)) {
    //si la tecla no coincide suma 1 al error
    textArr.value[wordCount.value][charInWordCount.value].err++
    errors.value++
    event.preventDefault()

  }


  if (["Tab"].includes(key)) {
    event.preventDefault()

  }
  // calcularWPM(); // Calcular WPM después de cada pulsación de tecla
}



function handleFinisih(time) {
  const mappedErrors = getErrorsForWords(textArr.value)


  console.log("FINISHED IN ", time / 1000, "Seconds")
  console.log(mappedErrors)
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

.information {
  /* flex items-center justify-end pr-20 pb-2 */
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 15px;

  border-bottom: 1px solid white;
}

.information .stat {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 3px;
}

.information .stat svg {
  height: 25px;
  width: auto;
}

.text-container {
  display: flex;
  flex-wrap: wrap;
}

.space-dot {
  color: rgb(95, 95, 95);
}

.space-dot.error {
  color: rgb(231 161 161);
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
  border-bottom: 4px solid white;
}

.selected-char.error {
  color: rgb(231 161 161);
  background: none !important;
  border-color: #b33434;
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

.button-wrapper {
  color: rgb(255, 255, 255);
  background: none;
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

  position: relative;
  outline: none;
}


.button-wrapper:not(:focus) * {
  filter: blur(2px)
}

.button-wrapper:not(:focus) .start-alert {
  display: flex;
}

.start-alert {
  background-color: white;
  padding: 3rem;
  color: #333;

  min-height: 50px;
  min-width: 50px;

  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  filter: none !important;

  z-index: 55;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
