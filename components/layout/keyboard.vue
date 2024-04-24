<template>
    <div class="key" :class="{ 'pressed': isPressed }" @mousedown="pressKey" @mouseup="releaseKey">
      <svg width="40" height="40">
        <!-- Aquí iría el diseño de tu tecla en SVG -->
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isPressed: false
      };
    },
    methods: {
      pressKey() {
        this.isPressed = true;
        // Aquí puedes emitir un evento para indicar que esta tecla fue presionada
      },
      releaseKey() {
        this.isPressed = false;
        // Aquí puedes emitir un evento para indicar que esta tecla fue soltada
      }
    }
  };
  </script>
  
  <style>
  .key {
    background-color: #f0f0f0; /* Color de fondo gris claro */
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px;
    display: inline-block;
    transition: background-color 0.2s;
  }
  
  .key.pressed {
    background-color: #fff; /* Color de fondo blanco cuando se presiona la tecla */
  }
  </style>
  