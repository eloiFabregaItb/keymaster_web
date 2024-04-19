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
      <p style="color: white;" class="pr-2 pl-2">{{ new Date().getTime() - startTimestamp }} ms</p>


      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <p style="color: white;" class="pr-2 pl-2">30s</p>

      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
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
      <button @keydown="handleKeyPress">Start</button>
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

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit cursus erat, convallis rutrum elit ullamcorper convallis."

const textArr = ref(splitText(text))
const wordCount = ref(0)
const charInWordCount = ref(0)
const startTimestamp = ref(0)
const started = ref(false)
const errors = ref(0)


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

    textArr.value = splitText(text) //reiniciar los errores
  }

  //texla
  const key = event.key
  const ignoreKeys = ["Shift"]

  if (key === textArr.value[wordCount.value][charInWordCount.value].char) {
    //si la texla coincide
    increment()

  } else if (!ignoreKeys.includes(key)) {
    //si la tecla no coincide

    //suma 1 al error
    textArr.value[wordCount.value][charInWordCount.value].err++
    errors.value++
  }
}

//separa el texto en un array tipo
//[["h","o","l","a"],[" "],["m","u","n","d","o"]]
function splitText(text) {
  const textArr = []

  const words = text.split(" ")

  for (let i = 0; i < words.length; i++) {
    textArr.push(words[i].split("").map(x => ({ char: x, err: 0 })))
    if (i < words.length - 1) {
      textArr.push([{ char: " ", show: "·", err: 0 }])
    }
  }

  return textArr
}

function calcularWPM(texto, tiempo) {
  // Contar las palabras en el texto
  const palabras = texto.trim().split(/\s+/).length;

  // Calcular palabras por minuto
  const minutos = tiempo / 60000; // Convertir milisegundos a minutos
  const wpm = palabras / minutos;

  return wpm.toFixed(2); // Redondear a 2 decimales
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
  background-color: #ff0000;
}
</style>
