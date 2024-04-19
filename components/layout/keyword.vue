<template>
  <div class="flex items-center justify-end pt-16">
  </div>
  <section class="mx-24 mt-16" id="profile">
    <div class="flex items-center justify-end pr-20 pb-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
      <p style="color: white;" class="pr-2 pl-2">126wpm</p>

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

    <div class="container flex flex-col justify-center mb- items-start">
      <div class="text-style mt-5 mb-5 text-white">
        <p>{{ textoObjetivo.join('') }}</p>
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
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      textoObjetivo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum condimentum erat, eu dapibus nibh tincidunt eu.".split(''),
      userInput: '', // Mantener el estado del texto ingresado por el usuario
      activeKey: null,
      keyboardLayout: [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '*'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Ç'],
        ['!', '"', '·', '$', '%', '&', '/', '(', ')', '=', '?', '¿', '¡'],
        ['Shift', 'Z', 'X', 'C', 'Space', 'V', 'B', 'N', 'M'],
        []
      ],
      pressedKeys: {} // Objeto para almacenar el estado de las teclas presionadas
    };
  },
  methods: {
    handleKeyDown(event) {
      event.preventDefault();
      event.stopPropagation();
      let key = event.key;

      // Verificar si se ha alcanzado el final del texto objetivo
      if (this.userInput.length < this.textoObjetivo.length) {
        // Obtener el carácter objetivo actual
        const charObjetivo = this.textoObjetivo[this.userInput.length];

        // Comparar el carácter presionado con el carácter objetivo actual
        if (key === charObjetivo) {
          // El carácter presionado es correcto, actualizar la entrada del usuario
          this.userInput += key;
        }
      }

      if (key === " ") {
        console.log("Tecla presionada: Space");
        this.activeKey = "Space";
      } else {
        console.log("Tecla presionada:", key);
        if (event.shiftKey) {
          key = key.toUpperCase();
        } else {
          key = key.toLowerCase();
        }
        this.activeKey = key;
      }
      this.pressedKeys[key] = true;
    },

    handleKeyUp(event) {
      let key = event.key.toLowerCase();
      if (Object.prototype.hasOwnProperty.call(this.pressedKeys, key)) {
        delete this.pressedKeys[key];
      }
      this.activeKey = null;
    },
    handleKeyClick(key) {
  // Verificar si se ha alcanzado el final del texto objetivo
  if (this.userInput.length < this.textoObjetivo.length) {
    // Obtener el carácter objetivo actual
    const charObjetivo = this.textoObjetivo[this.userInput.length];

    // Comparar el carácter presionado con el carácter objetivo actual
    if (key === charObjetivo) {
      // El carácter presionado es correcto, actualizar la entrada del usuario
      this.userInput += key;
      // Cambiar el estilo del carácter objetivo a negrita
      this.$set(this.textoObjetivo, this.userInput.length - 1, {char: charObjetivo, correct: true});
    } else {
      // El carácter presionado es incorrecto, mantener el estilo original
      this.$set(this.textoObjetivo, this.userInput.length, {char: charObjetivo, correct: false});
    }
  }
    // Actualizar la tecla activa
  if (key === " ") {
    this.activeKey = "Space";
  } else {
    this.activeKey = key;
  }
},
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
};
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

.text-style {
  color: white;
  font-size: 40px;
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
</style>
