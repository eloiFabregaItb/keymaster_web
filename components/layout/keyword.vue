<template>
  <div class="flex items-center justify-end pt-16">

  </div>
  <section class="mx-24 mt-16" id="profile">
    <div>
      <button class="px-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg> </button>

      <button class="px-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg> </button>

      <button class="px-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>

      <hr style="width: 95%;">

    </div>
    <div class="bg-green-400">

    </div>

    <div class="container flex flex-col justify-center mb-5 items-start"> <!-- Cambio en items-center a items-start -->
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
  </section>
</template>


<script>
export default {
  data() {
    return {
      activeKey: null,
      keyboardLayout: [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Del'],
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