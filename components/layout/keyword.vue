<template>
  <div class=" flex justify-center items-center">
    <div class="container flex flex-col justify-center mb-5 items-center" style="border-top: 1.5px solid lightgrey;">
      <div class="text-style mt-5 mb-5 text-white">
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
</template>

<script>
export default {
  data() {
    return {
      activeKey: null,
      keyboardLayout: [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '*'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Ç'],
        ['!', '"', '·', '$', '%', '&', '/', '(', ')', '=', '?', '¿', '¡'],
        ['Shift', 'Z', 'X', 'C', 'Space', 'V', 'B', 'N', 'M'],
        []
      ]
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
.container {
  margin-top: 14rem;
  width: 65%;
}
.text-style {
  color: white;
  font-size: 40px;
  font-family: 'JetBrains Mono', monospace;
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
  width: 60px;
  height: 60px;
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
.active {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}
</style>