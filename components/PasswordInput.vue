<template>
  <div class="PasswordWrapper">
    <input class="input" :type="isVisible ? 'text' : 'password'" placeholder="Contraseña" v-model="model">
    <span @click="changeVis()">

      <IcoEye v-if="isVisible" />
      <IcoEyeClose v-else />

    </span>
  </div>
</template>

<script setup>

import IcoEye from "~/assets/icons/actions/eye.svg"
import IcoEyeClose from "~/assets/icons/actions/eyeClose.svg"

import { ref } from "vue"

const isVisible = ref(false)

const model = defineModel()

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

.PasswordWrapper span svg {
  height: 15px;
  width: 15px;
}


.PasswordWrapper span {
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* width: 20px; */
}
</style>
