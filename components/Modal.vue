<template>
  <div class="modal-background" @click="handleClickOutside">
    <div class="modal" @click="handleClickInside">
      <header>
        <h1>{{ title }}</h1>
        <button @click="buttonClose" class="close"><span>&times;</span></button>
      </header>
      <main>
        <slot></slot>
      </main>
      <!-- <footer>
        <button>Aceptar</button>
        <button>Cancelar</button>
      </footer> -->
    </div>
  </div>
</template>

<script setup>

const { title } = defineProps(['title'])

const emit = defineEmits(['close'])

function buttonClose() {
  emit('close')
}

function handleClickInside(e) {
  e.preventDefault()
  e.stopPropagation()
}

function handleClickOutside() {
  emit('close')
}
</script>

<style scoped>
.modal {
  color: black;
}

.modal {
  z-index: 999;
  color: black;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100px;
  min-width: 37dvw;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-height: 90dvh;

  display: flex;
  flex-direction: column;
}

.modal-background {
  z-index: 998;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  background-color: #3338;
}

.modal header {
  display: flex;
  justify-content: space-between;

  align-items: center;
}

.close {
  font-size: 33px;
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: center;

}

.close:hover {
  color: red;
}

.modal main {
  flex: 1;
  overflow: auto;
}
</style>