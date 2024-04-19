<template>
  <div class="PasswordWrapper">
    <input class="input" :type="isVisible ? 'text' : 'password'" placeholder="Contraseña" v-model="user">
    <button @click="changeVis()">eye</button>
  </div>
</template>

<script setup>

import { ref } from "vue"

const isVisible = ref(false)


function changeVis() {
  isVisible.value = !isVisible.value
}



</script>

<style scoped>
.PasswordWrapper {
  width: 100%;

  font-size: 0.875rem;
  line-height: 1.25rem;



  border: 1px solid rgb(229 231 235);

  background-color: rgb(229 231 235);

  border-radius: .5rem;

  display: flex;

}


.PasswordWrapper:focus-within {
  border: 1px solid rgb(192 132 252);
  background-color: rgb(243 244 246);
}

.PasswordWrapper .input {
  flex: 1;
  padding-left: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;

  outline: none;
  background: none;
}
</style>
