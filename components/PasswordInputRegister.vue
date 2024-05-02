<template>
  <div class="PasswordWrapper">
    <input class="input" :type="isVisible ? 'text' : 'password'" placeholder="Confirmar contraseña" v-model="model">
    <button @click="changeVis()">

      <svg v-if="isVisible" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16">
        <g fill="#000000">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7" />
        </g>
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16">
        <g fill="#000000">
          <path
            d="m10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
          <path
            d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12l.708-.708l12 12z" />
        </g>
      </svg>
    </button>
  </div>
</template>

<script setup>

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

.PasswordWrapper button svg {
  height: 15px;
  width: 15px;
}


.PasswordWrapper button {
  padding: 0 20px;
  /* width: 20px; */
}
</style>
