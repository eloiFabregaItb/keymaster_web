<template>
  <div class="keyboard">
    <div class="row">
      <div class="key" data-key="Backquote">
        <svg x="0" y="0" width="38" height="38">
          <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
          <text x="10" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">`</text>
          <text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr">~</text>
        </svg>
      </div>
      <div class="key" data-key="Digit1">
        <svg x="40" y="0" width="38" height="38">
          <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
          <text x="10" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">1</text>
          <text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr">!</text>
        </svg>
      </div>
      <div class="key" data-key="Digit2">
        <svg class="key-size" x="80" y="0" width="38" height="38">
          <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
          <text x="10" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">2</text>
          <text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr">@</text>
        </svg>
      </div>
      <div class="key" data-key="Digit3">
        <svg class="key-size" x="120" y="0" width="38" height="38">
          <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
          <text x="10" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">3</text>
          <text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr">#</text>
        </svg>
      </div>
      <div class="key" data-key="Digit4">
        <svg class="key-size" x="160" y="0" width="38" height="38" data-key="Digit4">
          <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
            text-anchor="middle" dominant-baseline="middle" direction="ltr">4</text><text x="10" y="12"
            text-anchor="middle" dominant-baseline="middle" direction="ltr">$</text>

        </svg>
      </div><svg class="key-size" x="200" y="0" width="38" height="38" data-key="Digit5">
        <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">5</text><text x="10" y="12"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">%</text>
      </svg><svg class="key-size" x="240" y="0" width="38" height="38" data-key="Digit6">
        <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">6</text><text x="10" y="12"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">^</text>
      </svg><svg class="key-size" x="280" y="0" width="38" height="38" data-key="Digit7">
        <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">7</text><text x="10" y="12"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">&amp;</text>
      </svg><svg class="key-size" x="320" y="0" width="38" height="38" data-key="Digit8">
        <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">8</text><text x="10" y="12"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">*</text>
      </svg><svg class="key-size" x="360" y="0" width="38" height="38" data-key="Digit9">
        <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">9</text><text x="10" y="12"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">(</text>
      </svg><svg class="key-size" x="400" y="0" width="38" height="38" data-key="Digit0">
        <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">0</text><text x="10" y="12"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">)</text>
      </svg><svg class="key-size" x="440" y="0" width="38" height="38" data-key="Minus">
        <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">-</text><text x="10" y="12"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">_</text>
      </svg><svg class="key-size" x="480" y="0" width="38" height="38" data-key="Equal">
        <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">=</text><text x="10" y="12"
          text-anchor="middle" dominant-baseline="middle" direction="ltr">+</text>
      </svg><svg class="key-size" x="520" y="0" width="78" height="38" data-key="Backspace">
        <rect class="key-size" fill="none" x="0" y="0" width="78" height="38"></rect><text x="10" y="20"
          text-anchor="start" dominant-baseline="middle" direction="ltr">Backspace</text>
      </svg>
    </div>

    <svg x="0" y="40" width="58" height="38" data-key="Tab">
      <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Tab</text>
    </svg><svg x="60" y="40" width="38" height="38" data-key="KeyQ">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">Q</text>
    </svg><svg class="key-size" x="100" y="40" width="38" height="38" data-key="KeyW">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">W</text>
    </svg><svg class="key-size" x="140" y="40" width="38" height="38" data-key="KeyE">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">E</text>
    </svg><svg class="key-size" x="180" y="40" width="38" height="38" data-key="KeyR">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">R</text>
    </svg><svg class="key-size" x="220" y="40" width="38" height="38" data-key="KeyT">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">T</text>
    </svg><svg class="key-size" x="260" y="40" width="38" height="38" data-key="KeyY">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">Y</text>
    </svg><svg class="key-size" x="300" y="40" width="38" height="38" data-key="KeyU">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">U</text>
    </svg><svg class="key-size" x="340" y="40" width="38" height="38" data-key="KeyI">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">I</text>
    </svg><svg class="key-size" x="380" y="40" width="38" height="38" data-key="KeyO">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">O</text>
    </svg><svg class="key-size" x="420" y="40" width="38" height="38" data-key="KeyP">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">P</text>
    </svg><svg class="key-size" x="460" y="40" width="38" height="38" data-key="BracketLeft">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">[</text><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">{</text>
    </svg><svg class="key-size" x="500" y="40" width="38" height="38" data-key="BracketRight">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">]</text><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">}</text>
    </svg><svg class="key-size" x="540" y="40" width="58" height="38" data-key="Backslash">
      <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="27"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">\</text><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">|</text>
    </svg><svg x="0" y="80" width="68" height="38" data-key="CapsLock">
      <rect class="key-size" fill="none" x="0" y="0" width="68" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Caps Lock</text>
    </svg><svg x="70" y="80" width="38" height="38" data-key="KeyA">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">A</text>
    </svg><svg class="key-size" x="110" y="80" width="38" height="38" data-key="KeyS">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">S</text>
    </svg><svg class="key-size" x="150" y="80" width="38" height="38" data-key="KeyD">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">D</text>
    </svg><svg class="key-size" x="190" y="80" width="38" height="38" data-key="KeyF">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
      <circle class="jRTd41lToD" cx="19" cy="33" r="3"></circle><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">F</text>
    </svg><svg class="key-size" x="230" y="80" width="38" height="38" data-key="KeyG">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">G</text>
    </svg><svg class="key-size" x="270" y="80" width="38" height="38" data-key="KeyH">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">H</text>
    </svg><svg class="key-size" x="310" y="80" width="38" height="38" data-key="KeyJ">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
      <circle class="jRTd41lToD" cx="19" cy="33" r="3"></circle><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">J</text>
    </svg><svg class="key-size" x="350" y="80" width="38" height="38" data-key="KeyK">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">K</text>
    </svg><svg class="key-size" x="390" y="80" width="38" height="38" data-key="KeyL">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">L</text>
    </svg><svg class="key-size" x="430" y="80" width="38" height="38" data-key="Semicolon">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">;</text><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">:</text>
    </svg><svg class="key-size" x="470" y="80" width="38" height="38" data-key="Quote">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">'</text><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">"</text>
    </svg><svg class="key-size" x="510" y="80" width="88" height="38" data-key="Enter">
      <rect class="key-size" fill="none" x="0" y="0" width="88" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Enter</text>
    </svg><svg x="0" y="120" width="88" height="38" data-key="ShiftLeft">
      <rect class="key-size" fill="none" x="0" y="0" width="88" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Shift</text>
    </svg><svg x="90" y="120" width="38" height="38" data-key="KeyZ">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">Z</text>
    </svg><svg class="key-size" x="130" y="120" width="38" height="38" data-key="KeyX">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">X</text>
    </svg><svg class="key-size" x="170" y="120" width="38" height="38" data-key="KeyC">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">C</text>
    </svg><svg class="key-size" x="210" y="120" width="38" height="38" data-key="KeyV">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">V</text>
    </svg><svg class="key-size" x="250" y="120" width="38" height="38" data-key="KeyB">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">B</text>
    </svg><svg class="key-size" x="290" y="120" width="38" height="38" data-key="KeyN">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">N</text>
    </svg><svg class="key-size" x="330" y="120" width="38" height="38" data-key="KeyM">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">M</text>
    </svg><svg class="key-size" x="370" y="120" width="38" height="38" data-key="Comma">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">,</text><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">&lt;</text>
    </svg><svg class="key-size" x="410" y="120" width="38" height="38" data-key="Period">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">.</text><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">&gt;</text>
    </svg><svg class="key-size" x="450" y="120" width="38" height="38" data-key="Slash">
      <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
        text-anchor="middle" dominant-baseline="middle" direction="ltr">/</text><text x="10" y="12" text-anchor="middle"
        dominant-baseline="middle" direction="ltr">?</text>
    </svg><svg class="key-size" x="490" y="120" width="108" height="38" data-key="ShiftRight">
      <rect class="key-size" fill="none" x="0" y="0" width="108" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Shift</text>
    </svg><svg x="0" y="160" width="58" height="38" data-key="ControlLeft">
      <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Ctrl</text>
    </svg><svg x="60" y="160" width="58" height="38" data-key="AltLeft">
      <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Alt</text>
    </svg><svg class="key-size" x="120" y="160" width="358" height="38" data-key="Space">
      <rect class="key-size" fill="none" x="0" y="0" width="358" height="38"></rect>
    </svg><svg class="key-size" x="480" y="160" width="58" height="38" data-key="AltRight">
      <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Alt</text>
    </svg><svg class="key-size" x="540" y="160" width="58" height="38" data-key="ControlRight">
      <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
        text-anchor="start" dominant-baseline="middle" direction="ltr">Ctrl</text>
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue';
</script>

<style>
.keyboard {
  display: flex;
  flex-wrap: wrap;
}

.row {
  display: flex;
}

.key {
  width: 50px;
  height: 50px;
  color: black;
  border: 1px solid #000000;
  background-color: #ccc;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.key.pressed {
  background-color: #fff;
  /* Color de fondo blanco cuando se presiona la tecla */
}
</style>