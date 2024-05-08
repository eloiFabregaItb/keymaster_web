<script setup>
import { ref } from 'vue'



const text = "Hola buenas tardes mi nombre es antonio como esta usted. Es todo un placer"


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

</script>

<template>

  <p>errors {{ errors }}</p>
  <p>{{ new Date().getTime() - startTimestamp }}ms</p>
  <div class="container">
    <div v-for="(word, index) in textArr" :key="index" class="word" :class="{ 'selected-word': index === wordCount }">
      <span v-for="(char, charIndex) in word" :key="charIndex"
        :class="{ 'selected-char': index === wordCount && charIndex === charInWordCount, 'error': char.err }">
        {{ char.show || char.char }}
      </span>
    </div>
  </div>

  <button @keydown="handleKeyPress">Start</button>


</template>



<style scoped>
.selected-word {
  background-color: #444;
}

.selected-char {
  border-bottom: 4px solid black;
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
  background-color: #903333;
}
</style>
