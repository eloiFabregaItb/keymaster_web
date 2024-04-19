<template>
  <div class="modal-background">
    <div class="modal">
      <header>
        <h1></h1>
        <button @click="buttonClose" class="close">&times;</button>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>

      </footer>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])

function buttonClose(){
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
  min-width: 100px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  align-items: flex-start;
  justify-content: space-between;
}

.close {
  font-size: 33px;

}

.close:hover{
  color: red;
}
</style>