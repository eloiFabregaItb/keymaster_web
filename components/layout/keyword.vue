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
                :class="['key', { 'active': key === activeKey }, { 'space-key': key === 'Space' }]"
                @click="handleKeyClick(key)">
                {{ key }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Div lateral vertical -->
    <div class="sidebar text-white">
      <h2 class="text-lg font-semibold mb-2">Usuarios</h2>
      <div class="flex justify-start items-center">
        <svg class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#6ddb23" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
        </svg>
        <p class="text-sm">Online:</p>
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
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '*'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Ç'],
        ['!', '"', '·', '$', '%', '&', '/', '(', ')', '=', '?', '¿', '¡'],
        ['Shift', 'Z', 'X', 'C', 'Space', 'V', 'B', 'N', 'M'],
        []
      ],
      usersOnline: 50
    };
  },
  methods: {
    handleKeyClick(key) {
      console.log("Tecla pulsada:", key);
    },
    handleKeyDown(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.key === " ") {
        this.activeKey = "Space";
        this.handleKeyClick("Space");
      } else {
        this.activeKey = event.key.toUpperCase();
        this.handleKeyClick(event.key.toUpperCase());
      }
    },
    handleKeyUp() {
      this.activeKey = null;
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
  grid-template-columns: 5fr 1fr auto; /* Una columna para el teclado y una para el sidebar */
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
  padding-top: 15px;
  border-top: solid 1px #ccc;
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

.space-key {
  flex-grow: 3;
  /* Hace que la tecla "Space" ocupe 3 veces el espacio horizontal */
}

</style>
