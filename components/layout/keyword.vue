<template>
  <div class="kw-container">
    <div class="kw">
      <div class="container flex flex-col justify-center items-center">
        <div class="">
          <div class="content-wrapper text-style mt-5 mb-5 text-white">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div class="keyboard text-keyword flex-col">
            <div class="row" v-for="(row, rowIndex) in keyboardLayout" :key="rowIndex">
              <div v-for="(key, keyIndex) in row" :key="keyIndex"
                :class="['key', { 'active': key === activeKey }, { 'space-key': key === 'Space' }, { 'del-key': key === 'DEL' }]"
                :style="{ flex: key === 'Space' ? '3' : '1' }"
                @click="handleKeyClick(key)">
                {{ key === 'Space' ? 'Space' : key }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Div lateral vertical -->
    <div class="sidebar text-white">
      <h2 class="text-lg font-semibold mb-2">Usuarios</h2>
      <div class="flex justify-between items-center">
        <p class="text-sm"><svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#6ddb23" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>Online:</p>
        <p class="text-sm font-semibold">{{ usersOnline }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: null,
      keyboardLayout: [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'DEL'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '*'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Ç'],
        ['!', '"', '·', '$', '%', '&', '/', '(', ')', '=', '?', '¿', '¡'],
        ['Shift', 'Z', 'X', 'C', 'Space', 'V', 'B', 'N', 'M'],
        []
      ],
      usersOnline: 50,
      shiftPressed: false
    };
  },
  methods: {
    handleKeyClick(key) {
      console.log("Tecla pulsada:", key);
    },
    handleKeyDown(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.key === "Shift") {
        this.shiftPressed = true;
      } else {
        if (this.shiftPressed) {
          this.activeKey = event.key.toUpperCase();
        } else {
          this.activeKey = event.key.toLowerCase();
        }
        this.handleKeyClick(this.activeKey); // Llamamos a handleKeyClick una vez aquí
      }
      
      // Manejo específico para la tecla "DEL"
      if (event.key === "Delete") {
        this.activeKey = "DEL";
        this.handleKeyClick("DEL");
      }
    },
    handleKeyUp(event) {
      if (event.key === "Shift") {
        this.shiftPressed = false;
      }
      this.activeKey = null; // Desiluminamos la tecla al soltarla
      
      // Desiluminar la tecla "DEL" cuando se suelta
      if (event.key === "Delete") {
        this.activeKey = null;
      }
    }
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
/* Estilos específicos del componente, puedes personalizar según tus necesidades */
@font-face {
  font-family: 'JetBrains Mono';
  src: url('~/assets/fonts/JetBrainsMonoNL-Thin.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  overflow-y: hidden;
}

.kw-container {
  display: grid;
  grid-template-columns: 5fr 0.5fr auto; /* Una columna para el teclado y una para el sidebar */
}

.kw {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  margin-top: 10rem;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sidebar {
  margin-top: 10rem;
}

.content-wrapper {
  width: 100%;
}

.text-style, .keyboard {
  width: 100%;
}

.text-style {
  color: white;
  font-size: 40px;
  font-family: 'JetBrains Mono', monospace;
  align-self: flex-start;
}

.keyboard {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinea el teclado a la izquierda */
}

.row {
  display: flex;
  margin-bottom: 5px;
}

.key {
  width: 65px;
  height: 65px;
  background-color: #ccc;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.space-key, .del-key {
  flex-grow: 6;
  /* Hace que la tecla "Space" y "DEL" ocupe 3 veces el espacio horizontal */
  font-size: 18px; /* Ajustamos el tamaño del texto */
}

h2 {
  border-bottom: 1px solid #ccc;
}

.active {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}
</style>
