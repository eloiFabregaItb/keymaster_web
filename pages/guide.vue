<template>
    <Navbar />
    <div class="page-container">
        <div class="container flex items-center justify-end pt-36 pl-36 pr-36">
            <div class="content flex-grow d-flex flex-column align-items-center justify-content-center">
                <div class="flex-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6"
                        stroke="currentColor" class="q-svg w-7 h-7 mr-0.5 slide">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <h1>Guide</h1>
                </div>
                <p>Touch typing is all about the idea that each finger has its own area on the keyboard. Thanks to that
                    fact
                    you can type without looking at the keys. Practice regularly and your fingers will learn their
                    location
                    on the keyboard through muscle memory.</p>
                <h2>1. Sitting posture for typing</h2>
                <div class="lista d-flex flex-column align-items-center">
                    <ul>
                        <li>Sit straight and remember to keep your back straight.</li>
                        <li>Keep your elbows bent at the right angle.</li>
                        <li>Face the screen with your head slightly tilted forward.</li>
                        <li>Keep at least 45 - 70 cm of distance between your eyes and the screen.</li>
                        <li>Expose the shoulder, arm, and wrist muscles to the least possible strain. The wrists can
                            touch
                            the tabletop in front of the keyboard. Never shift your body weight to the wrists by resting
                            on
                            them.</li>
                    </ul>
                </div>

                <h2>2. Posición de las manos</h2>
                <!--<img src="https://www.readandspell.com/sites/default/files//WhyLearnTypingSkills.jpeg" alt=""
                height="25%" />-->
                <div>
                    <p>Antes de aprender a escribir, eche un vistazo a la configuración del teclado. El número de teclas
                        varía entre 50 y 54. La fila de teclas que comienza con el carácter "A" se denomina Home row
                        position o "fila de
                        inicio". Esta fila es muy importante para aprender a mecanografiar, ya que actúa como base
                        al escribir las teclas.</p>
                </div>
                <div class="row">
                    <div class="col-md-6 pr-10">
                        <p>Keep the left hand four fingers as mentioned below:</p>
                        <ul>
                            <li>1. The little finger on 'A'</li>
                            <li>2. The ring finger on 'S'</li>
                            <li>3. The middle finger on 'D'</li>
                            <li>4. The index finger on 'F</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <p>Keep the right hand four fingers as mentioned below:</p>
                        <ul>
                            <li>1. The little finger on 'Ñ'</li>
                            <li>2. The ring finger on 'L'</li>
                            <li>3. The middle finger on 'K'</li>
                            <li>4. The index finger on 'J</li>
                        </ul>
                    </div>
                </div>
                <h3>Practica un poco con las 8 letras principales para tener soltura</h3>
                <div>
                    <div class="row">
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyA' }" data-key="KeyA">
                            <svg class="key-size" x="70" y="80" width="38" height="38" data-key="KeyA">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">A</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyS' }" data-key="KeyS">
                            <svg class="key-size" x="110" y="80" width="38" height="38" data-key="KeyS">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">S</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyD' }" data-key="KeyD">
                            <svg class="key-size" x="150" y="80" width="38" height="38" data-key="KeyD">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">D</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyF' }" data-key="KeyF">
                            <svg class="key-size" x="190" y="80" width="38" height="38" data-key="KeyF">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">F</text>
                            </svg>
                        </div>
                        <div class="key-hidden">
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyJ' }" data-key="KeyJ">
                            <svg class="key-size" x="310" y="80" width="38" height="38" data-key="KeyJ">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">J</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyK' }" data-key="KeyK">
                            <svg class="key-size" x="350" y="80" width="38" height="38" data-key="KeyK">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">K</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyL' }" data-key="KeyL">
                            <svg class="key-size" x="390" y="80" width="38" height="38" data-key="KeyL">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">L</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'Semicolon' }" data-key="Semicolon">
                            <svg class="key-size" x="430" y="80" width="38" height="38" data-key="Semicolon">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">Ñ</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- PRUEBA -->
    <div class="page-container">
        <div class="container flex items-center justify-end pt-36 pl-36 pr-36">
            <div class="content flex-grow d-flex flex-column align-items-center justify-content-center">
                <div class="flex-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6"
                        stroke="currentColor" class="q-svg w-7 h-7 mr-0.5 slide">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <h1>Guide</h1>
                </div>
                <p>Touch typing is all about the idea that each finger has its own area on the keyboard. Thanks to that
                    fact
                    you can type without looking at the keys. Practice regularly and your fingers will learn their
                    location
                    on the keyboard through muscle memory.</p>
                <h2>1. Sitting posture for typing</h2>
                <div class="lista d-flex flex-column align-items-center">
                    <ul>
                        <li>Sit straight and remember to keep your back straight.</li>
                        <li>Keep your elbows bent at the right angle.</li>
                        <li>Face the screen with your head slightly tilted forward.</li>
                        <li>Keep at least 45 - 70 cm of distance between your eyes and the screen.</li>
                        <li>Expose the shoulder, arm, and wrist muscles to the least possible strain. The wrists can
                            touch
                            the tabletop in front of the keyboard. Never shift your body weight to the wrists by resting
                            on
                            them.</li>
                    </ul>
                </div>

                <h2>2. Posición de las manos</h2>
                <!--<img src="https://www.readandspell.com/sites/default/files//WhyLearnTypingSkills.jpeg" alt=""
                height="25%" />-->
                <div>
                    <p>Antes de aprender a escribir, eche un vistazo a la configuración del teclado. El número de teclas
                        varía entre 50 y 54. La fila de teclas que comienza con el carácter "A" se denomina Home row
                        position o "fila de
                        inicio". Esta fila es muy importante para aprender a mecanografiar, ya que actúa como base
                        al escribir las teclas.</p>
                </div>
                <div class="row">
                    <div class="col-md-6 pr-10">
                        <p>Keep the left hand four fingers as mentioned below:</p>
                        <ul>
                            <li>1. The little finger on 'A'</li>
                            <li>2. The ring finger on 'S'</li>
                            <li>3. The middle finger on 'D'</li>
                            <li>4. The index finger on 'F</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <p>Keep the right hand four fingers as mentioned below:</p>
                        <ul>
                            <li>1. The little finger on 'Ñ'</li>
                            <li>2. The ring finger on 'L'</li>
                            <li>3. The middle finger on 'K'</li>
                            <li>4. The index finger on 'J</li>
                        </ul>
                    </div>
                </div>
                <h3>Practica un poco con las 8 letras principales para tener soltura</h3>
                <div>
                    <div class="row">
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyA' }" data-key="KeyA">
                            <svg class="key-size" x="70" y="80" width="38" height="38" data-key="KeyA">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">A</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyS' }" data-key="KeyS">
                            <svg class="key-size" x="110" y="80" width="38" height="38" data-key="KeyS">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">S</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyD' }" data-key="KeyD">
                            <svg class="key-size" x="150" y="80" width="38" height="38" data-key="KeyD">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">D</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyF' }" data-key="KeyF">
                            <svg class="key-size" x="190" y="80" width="38" height="38" data-key="KeyF">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">F</text>
                            </svg>
                        </div>
                        <div class="key-hidden">
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyJ' }" data-key="KeyJ">
                            <svg class="key-size" x="310" y="80" width="38" height="38" data-key="KeyJ">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">J</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyK' }" data-key="KeyK">
                            <svg class="key-size" x="350" y="80" width="38" height="38" data-key="KeyK">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">K</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyL' }" data-key="KeyL">
                            <svg class="key-size" x="390" y="80" width="38" height="38" data-key="KeyL">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">L</text>
                            </svg>
                        </div>
                        <div class="key" :class="{ 'key-pressed': pressedKey === 'Semicolon' }" data-key="Semicolon">
                            <svg class="key-size" x="430" y="80" width="38" height="38" data-key="Semicolon">
                                <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text
                                    x="10" y="12" text-anchor="middle" dominant-baseline="middle"
                                    direction="ltr">Ñ</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from "~/components/layout/navbar.vue";
import Footer from "~/components/layout/footer.vue";

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

<style>
body {
    color: white;
}

.page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.question-svg {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
}

.flex-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.q-svg {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
}

h1 {
    font-size: 2rem;
    text-align: center;
}

.lista {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.key-hidden {
    width: 38px;
    height: 38px;
    border-radius: 10%;
    margin: 5px;
}
</style>
