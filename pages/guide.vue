<template>

  <div class="container-guide">

    <div class="header">
      <IcoQuestion />
      <h1 class="title">Guía</h1>
    </div>

    <div class="content-guide">
      <p class="">La mecanografía táctil se basa en la idea de que cada dedo tiene su propia área en el
        teclado.
        Gracias a eso
        puedes escribir sin mirar las teclas. Practica regularmente y tus dedos aprenderán su
        ubicación
        en el teclado a través de la memoria muscular.</p>

      <h2>1. Postura correcta para escribir</h2>

      <img class="pb-8" src="@/assets/icons/img/posture.png" alt="good posture" width="30%" />

      <div class="lista d-flex flex-column align-items-center">
        <ul>
          <li>Siéntate derecho y recuerda mantener la espalda recta.</li>
          <li>Mantén los codos doblados en el ángulo correcto.</li>
          <li>Enfrenta la pantalla con la cabeza ligeramente inclinada hacia adelante.</li>
          <li>Mantén al menos 45 - 70 cm de distancia entre tus ojos y la pantalla.</li>
          <li>Expone los músculos del hombro, brazo y muñeca a la menor tensión posible. Las muñecas
            pueden
            tocar
            la mesa frente al teclado. Nunca desplaces el peso de tu cuerpo a las muñecas apoyándote
            en
            ellas.</li>
        </ul>
      </div>

      <h2>2. Posición de las manos</h2>

      <div>
        <p>Antes de aprender a escribir, eche un vistazo a la configuración del teclado. El número de teclas
          varía entre 50 y 54. La fila de teclas que comienza con el carácter "A" se denomina "home row
          position" o "fila de
          inicio". Esta fila es muy importante para aprender a mecanografiar, ya que actúa como base
          al escribir las teclas.</p>
      </div>

      <div class="row">
        <div class="col-md-6 pr-10">
          <p>Dedos de la mano izquierda:</p>
          <ul>
            <li>1. El meñique en 'A'</li>
            <li>2. El anular en 'S'</li>
            <li>3. El dedo medio en 'D'</li>
            <li>4. El índice en 'F'</li>
          </ul>
        </div>
        <div class="col-md-6">
          <p>Dedos de la mano derecha:</p>
          <ul>
            <li>1. El meñique en 'Ñ'</li>
            <li>2. El anular en 'L'</li>
            <li>3. El dedo medio en 'K'</li>
            <li>4. El índice en 'J'</li>
          </ul>
        </div>
      </div>

      <h3>Practica un poco con las 8 letras principales para tener soltura</h3>

      <div class="keyb-keys">
        <div class="row pb-8">
          <div class="keyA" :class="{ 'key-pressed': pressedKey === 'KeyA' }" data-key="KeyA">
            <svg class="key-size" x="70" y="80" width="38" height="38" data-key="KeyA">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">A</text>
            </svg>
          </div>
          <div class="keyS" :class="{ 'key-pressed': pressedKey === 'KeyS' }" data-key="KeyS">
            <svg class="key-size" x="110" y="80" width="38" height="38" data-key="KeyS">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">S</text>
            </svg>
          </div>
          <div class="keyD" :class="{ 'key-pressed': pressedKey === 'KeyD' }" data-key="KeyD">
            <svg class="key-size" x="150" y="80" width="38" height="38" data-key="KeyD">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">D</text>
            </svg>
          </div>
          <div class="keyF" :class="{ 'key-pressed': pressedKey === 'KeyF' }" data-key="KeyF">
            <svg class="key-size" x="190" y="80" width="38" height="38" data-key="KeyF">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">F</text>
            </svg>
          </div>
          <div class="key-hidden">
          </div>
          <div class="key-hidden">
          </div>
          <div class="keyJ" :class="{ 'key-pressed': pressedKey === 'KeyJ' }" data-key="KeyJ">
            <svg class="key-size" x="310" y="80" width="38" height="38" data-key="KeyJ">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">J</text>
            </svg>
          </div>
          <div class="keyK" :class="{ 'key-pressed': pressedKey === 'KeyK' }" data-key="KeyK">
            <svg class="key-size" x="350" y="80" width="38" height="38" data-key="KeyK">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">K</text>
            </svg>
          </div>
          <div class="keyL" :class="{ 'key-pressed': pressedKey === 'KeyL' }" data-key="KeyL">
            <svg class="key-size" x="390" y="80" width="38" height="38" data-key="KeyL">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">L</text>
            </svg>
          </div>
          <div class="keyÑ" :class="{ 'key-pressed': pressedKey === 'Semicolon' }" data-key="Semicolon">
            <svg class="key-size" x="430" y="80" width="38" height="38" data-key="Semicolon">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">Ñ</text>
            </svg>
          </div>
        </div>
        <div>
          <img class="pb-8" src="@/assets/icons/img/practice.png" alt="good posture" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import IcoQuestion from "~/assets/icons/actions/question.svg"

const pressedKey = ref(null);

const handleKeyDown = (event) => {
  pressedKey.value = event.code;
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftPressed.value = true;
  }
};

const handleKeyUp = (event) => {
  pressedKey.value = null;
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftPressed.value = false;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
});

</script>

<style scoped>
.container-guide {
  color: white;
  display: flex;
  flex-direction: column;
}

/* HEADER */
.header {
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid white;
  margin-bottom: 1rem;
  width: 100%;

}

.header svg {
  height: 30px;
  width: auto;
}

.title {
  font-size: 2rem;
  font-weight: 900;
}

h2 {
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-weight: 900 !important;
}







.lista,
.content-guide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.key-hidden {
  width: 65px;
  height: 65px;
  border-radius: 10%;
}

.keyA,
.keyS,
.keyD,
.keyF,
.keyJ,
.keyK,
.keyL,
.keyÑ {
  width: 65px;
  height: 65px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.keyA {
  background-color: #77e2aa;
  border: 1px solid #77e2aa;
}

.keyS {
  background-color: #62e3fe;
  border: 1px solid #62e3fe;
}

.keyD {
  background-color: #f89bc6;
  border: 1px solid #f89bc6;
}

.keyF {
  background-color: #ffbf82;
  border: 1px solid #ffbf82;
}



.row {
  display: flex;
  justify-content: center;
  padding: 0 15px;
  /* Ajusta el valor del padding según tus necesidades */
}
</style>
