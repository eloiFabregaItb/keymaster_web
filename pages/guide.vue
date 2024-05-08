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
        puedes escribir sin mirar las teclas.</p>
      <p>Practica regularmente y tus dedos aprenderán su
        ubicación
        en el teclado a través de la memoria muscular.</p>

      <h2>1. Postura correcta para escribir</h2>

      <img class="pb-8" src="@/assets/icons/img/posture.png" alt="good posture" width="30%" />

      <div class="lista d-flex flex-column align-items-center">
        <ul>
          <li>Siéntate derecho y recuerda mantener la espalda recta.</li>
          <li>Los codos deben estar en un ángulo de 90 grados.</li>
          <li>Los antebrazos deben estar paralelos al suelo.</li>
          <li>Enfrenta la pantalla con la cabeza ligeramente inclinada hacia adelante.</li>
          <li>Mantén al menos 45 - 70 cm de distancia entre tus ojos y la pantalla.</li>
          <li>Expon los músculos del hombro, brazo y muñeca a la menor tensión posible. </li>
          <li>Los hombros deben estar relajados.</li>
          <li>Los codos deben estar cerca del cuerpo.</li>
          <li>Los antebrazos deben estar en posición horizontal.</li>
          <li>Las muñecas pueden tocar la mesa frente al teclado.</li>
          <li>Los dedos deben estar en posición de escritura.</li>
          <li> Nunca desplaces el peso de tu cuerpo a las muñecas apoyándote
            en
            ellas.</li>
          <li>Coloca los pies en el suelo o en un reposapiés.</li>
          <li>Descansa los ojos cada cada 15-20 minutos.</li>
        </ul>
      </div>

      <h2>2. Posición de las manos</h2>

      <div>
        <p class="key-conf">Antes de aprender a escribir, eche un vistazo a la configuración del teclado. El número de
          teclas
          varía entre 50 y 54. La fila de teclas que comienza con el carácter "A" se denomina "home row
          position" o "fila de
          inicio". Esta fila es muy importante para aprender a mecanografiar, ya que actúa como base
          al escribir las teclas.</p>
      </div>

      <div class="row">
        <div class="col-md-6 pr-10">
          <p class="key-conf">Dedos de la mano izquierda:</p>
          <ul>
            <li>1. El meñique en la tecla/letra 'A'</li>
            <li>2. El anular en la tecla/letra 'S'</li>
            <li>3. El dedo medio en la tecla/letra 'D'</li>
            <li>4. El índice en la tecla/letra 'F'</li>
          </ul>
        </div>
        <div class="col-md-6">
          <p class="key-conf">Dedos de la mano derecha:</p>
          <ul>
            <li>1. El meñique en la tecla/letra 'Ñ'</li>
            <li>2. El anular en la tecla/letra 'L'</li>
            <li>3. El dedo medio en la tecla/letra 'K'</li>
            <li>4. El índice en la tecla/letra 'J'</li>
          </ul>
        </div>
      </div>

      <div class="pulgar mt-8">
        <p>Y los dedos pulgares sobre la tecla 'Espacio'</p>
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
          <img class="pb-8 pt-6" src="@/assets/icons/img/practice.png" alt="good posture" width="100%" />
        </div>
      </div>
      <p class="pb-12 flex-column align-items-center">Cada color de las teclas corresponde al dedo que debería
        pulsar esa tecla</p>
      <h2>3. Ejercicios de mecanografía</h2>
      <div class="lista d-flex flex-column align-items-center">
        <p class="pb-12">A la hora de escribir un texto, ya sea preestablecido o desde 0 deberás tener esto en cuenta:
        </p>
        <ul>
          <li>Pulsa las teclas sólo con los dedos para los que han sido reservadas.</li>
          <li>Regresa siempre a la posición inicial de los dedos 'ASDF - JKLÑ'.</li>
          <li>Establece y manten un ritmo mientras escribe.</li>
          <li>Las pulsaciones de teclas deben realizarse a intervalos iguales.</li>
          <li>Al escribir, imagina la ubicación del símbolo en el teclado.</li>
          <li>La tecla SHIFT siempre se presiona con el dedo meñique opuesto al que presiona la otra tecla.</li>
          <li>Utiliza el pulgar de la mano que le resulte más conveniente para presionar la barra espaciadora.</li>
          <li>Practica regularmente para mejorar tu velocidad y precisión.</li>
        </ul>
      </div>
      <h1 class="title pt-8">¡ES HORA DE EMPEZAR A PRACTICAR!</h1>
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
  margin: 50px;
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

img {
  max-width: 100%;
}

h2 {
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-weight: 900 !important;
}

h3 {
  font-size: 1.2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-weight: 900 !important;
}

p {
  font-size: 1.2rem;
  padding-bottom: 1rem;
}

li {
  font-size: 1.1rem;
  padding-bottom: 0.25rem;
  font-weight: normal !important;
}

.key-conf {
  padding-bottom: 1.5rem;
}

.lista,
.content-guide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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

.keyJ {
  background-color: #FEED81;
  border: #FEED81;
}

.keyK {
  background-color: #F69EC6;
  border: #F69EC6;
}

.keyL {
  background-color: #62E4FE;
  border: #62E4FE;
}

.keyÑ {
  background-color: #77E2AA;
  border: #77E2AA;
}

.key-pressed {
  background-color: rgb(231, 231, 231);
  border: white;

}

.row {
  display: flex;
  justify-content: center;
  padding: 0 15px;
  /* Ajusta el valor del padding según tus necesidades */
}
</style>
