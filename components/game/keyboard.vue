<template>
  <div class="keyboard" ref="keyboardRef" @keydown="handleKeyDown" @keyup="handleKeyUp">

    <div class="innerKeyboard">

      <div class="row">
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'Backquote' }" data-key="Backquote">
          <div class="innerKey">
            <svg x="0" y="0" width="38" height="38">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
              <text x="10" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">º</text>
              <text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr">ª</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit1' }" data-key="Digit1">
          <div class="innerKey" :style="makeColor('1')">
            <svg x="40" y="0" width="38" height="38">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
              <text x="10" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">1</text>
              <text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr">!</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit2' }" data-key="Digit2">
          <div class="innerKey" :style="makeColor('2')">
            <svg class="key-size" x="80" y="0" width="38" height="38">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
              <text x="10" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">2</text>
              <text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr">@</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit3' }" data-key="Digit3">
          <div class="innerKey" :style="makeColor('3')">
            <svg class="key-size" x="120" y="0" width="38" height="38">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect>
              <text x="10" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">3</text>
              <text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr">#</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit4' }" data-key="Digit4">
          <div class="innerKey" :style="makeColor('4')">
            <svg class="key-size" x="160" y="0" width="38" height="38" data-key="Digit4">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">4</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">$</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit5' }" data-key="Digit5">
          <div class="innerKey" :style="makeColor('5')">
            <svg class="key-size" x="200" y="0" width="38" height="38" data-key="Digit5">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">5</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">%</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit6' }" data-key="Digit6">
          <div class="innerKey" :style="makeColor('6')">
            <svg class="key-size" x="240" y="0" width="38" height="38" data-key="Digit6">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">6</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">%</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit7' }" data-key="Digit7">
          <div class="innerKey" :style="makeColor('7')">
            <svg class="key-size" x="280" y="0" width="38" height="38" data-key="Digit7">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">7</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">/</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit8' }" data-key="Digit8">
          <div class="innerKey" :style="makeColor('8')">
            <svg class="key-size" x="320" y="0" width="38" height="38" data-key="Digit8">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">8</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">(</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit9' }" data-key="Digit9">
          <div class="innerKey" :style="makeColor('9')">
            <svg class="key-size" x="360" y="0" width="38" height="38" data-key="Digit9">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">9</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">)</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Digit0' }" data-key="Digit0">
          <div class="innerKey" :style="makeColor('0')">
            <svg class="key-size" x="400" y="0" width="38" height="38" data-key="Digit0">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">0</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">=</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'Minus' }" data-key="Minus">
          <div class="innerKey">
            <svg class="key-size" x="440" y="0" width="38" height="38" data-key="Minus">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">'</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">?</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'Equal' }" data-key="Equal">
          <div class="innerKey">
            <svg class="key-size" x="480" y="0" width="38" height="38" data-key="Equal">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">¡</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">¿</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey u1-5" :class="{ 'key-pressed': pressedKey === 'Backspace' }" data-key="Backspace">
          <div class="innerKey">
            <svg class="key-size" x="520" y="0" width="78" height="38" data-key="Backspace">
              <rect class="key-size" fill="none" x="0" y="0" width="78" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Del</text>
            </svg>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="key u1-5 hideKey" :class="{ 'key-pressed': pressedKey === 'Tab' }" data-key="Tab">
          <div class="innerKey">
            <svg class="key-size" x="0" y="40" width="58" height="38" data-key="Tab">
              <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Tab</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyQ' }" data-key="KeyQ">
          <div class="innerKey" :style="makeColor('Q')">
            <svg class="key-size" x="60" y="40" width="38" height="38" data-key="KeyQ">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">Q</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyW' }" data-key="KeyW">
          <div class="innerKey" :style="makeColor('W')">
            <svg class="key-size" x="100" y="40" width="38" height="38" data-key="KeyW">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">W</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyE' }" data-key="KeyE">
          <div class="innerKey" :style="makeColor('E')">
            <svg class="key-size" x="140" y="40" width="38" height="38" data-key="KeyE">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">E</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyR' }" data-key="KeyR">
          <div class="innerKey" :style="makeColor('R')">
            <svg class="key-size" x="180" y="40" width="38" height="38" data-key="KeyR">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">R</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyT' }" data-key="KeyT">
          <div class="innerKey" :style="makeColor('T')">
            <svg class="key-size" x="220" y="40" width="38" height="38" data-key="KeyT">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">T</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyY' }" data-key="KeyY">
          <div class="innerKey" :style="makeColor('Y')">
            <svg class="key-size" x="260" y="40" width="38" height="38" data-key="KeyY">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">Y</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyU' }" data-key="KeyU">
          <div class="innerKey" :style="makeColor('U')">
            <svg class="key-size" x="300" y="40" width="38" height="38" data-key="KeyU">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">U</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyI' }" data-key="KeyI">
          <div class="innerKey" :style="makeColor('I')">
            <svg class="key-size" x="340" y="40" width="38" height="38" data-key="KeyI">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">I</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyO' }" data-key="KeyO">
          <div class="innerKey" :style="makeColor('O')">
            <svg class="key-size" x="380" y="40" width="38" height="38" data-key="KeyO">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">O</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyP' }" data-key="KeyP">
          <div class="innerKey" :style="makeColor('P')">
            <svg class="key-size" x="420" y="40" width="38" height="38" data-key="KeyP">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">P</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'BracketLeft' }" data-key="BracketLeft">
          <div class="innerKey">
            <svg class="key-size" x="460" y="40" width="38" height="38" data-key="BracketLeft">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">[</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">^</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'BracketRight' }" data-key="BracketRight">
          <div class="innerKey">
            <svg class="key-size" x="500" y="40" width="38" height="38" data-key="BracketRight">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">+</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">*</text>
              <text x="24" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">]</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'Enter' }" data-key="Enter">
          <div class="innerKey">
            <svg class="key-size" x="510" y="80" width="88" height="38" data-key="Enter">
              <rect class="key-size" fill="none" x="0" y="0" width="88" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Enter</text>
            </svg>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="key u1-75 hideKey" :class="{ 'key-pressed': pressedKey === 'CapsLock' }" data-key="CapsLock">
          <div class="innerKey">
            <svg class="key-size" x="0" y="80" width="68" height="38" data-key="CapsLock">
              <rect class="key-size" fill="none" x="0" y="0" width="68" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Mayus</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyA' }" data-key="KeyA">
          <div class="innerKey" :style="makeColor('A')">
            <svg class="key-size" x="70" y="80" width="38" height="38" data-key="KeyA">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">A</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyS' }" data-key="KeyS">
          <div class="innerKey" :style="makeColor('S')">
            <svg class="key-size" x="110" y="80" width="38" height="38" data-key="KeyS">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">S</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyD' }" data-key="KeyD">
          <div class="innerKey" :style="makeColor('D')">
            <svg class="key-size" x="150" y="80" width="38" height="38" data-key="KeyD">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">D</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyF' }" data-key="KeyF">
          <div class="innerKey" :style="makeColor('F')">
            <svg class="key-size" x="190" y="80" width="38" height="38" data-key="KeyF">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">F</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyG' }" data-key="KeyG">
          <div class="innerKey" :style="makeColor('G')">
            <svg class="key-size" x="230" y="80" width="38" height="38" data-key="KeyG">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">G</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyH' }" data-key="KeyH">
          <div class="innerKey" :style="makeColor('H')">
            <svg class="key-size" x="270" y="80" width="38" height="38" data-key="KeyH">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">H</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyJ' }" data-key="KeyJ">
          <div class="innerKey" :style="makeColor('J')">
            <svg class="key-size" x="310" y="80" width="38" height="38" data-key="KeyJ">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">J</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyK' }" data-key="KeyK">
          <div class="innerKey" :style="makeColor('K')">
            <svg class="key-size" x="350" y="80" width="38" height="38" data-key="KeyK">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">K</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyL' }" data-key="KeyL">
          <div class="innerKey" :style="makeColor('L')">
            <svg class="key-size" x="390" y="80" width="38" height="38" data-key="KeyL">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">L</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'Semicolon' }" data-key="Semicolon">
          <div class="innerKey">
            <svg class="key-size" x="430" y="80" width="38" height="38" data-key="Semicolon">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">Ñ</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'Quote' }" data-key="Quote">
          <div class="innerKey">
            <svg class="key-size" x="470" y="80" width="38" height="38" data-key="Quote">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">'</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">¨</text>
              <text x="24" y="27" text-anchor="middle" dominant-baseline="middle" direction="ltr">{</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'Backslash' }" data-key="Backslash">
          <div class="innerKey">
            <svg class="key-size" x="470" y="80" width="38" height="38" data-key="Backslash">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">Ç</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">}</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey u0-75" :class="{ 'key-pressed': pressedKey === 'Enter' }" data-key="Enter">
          <div class="innerKey">
            <!-- <svg class="key-size" x="510" y="80" width="88" height="38" data-key="Enter">
              <rect class="key-size" fill="none" x="0" y="0" width="88" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Enter</text>
            </svg> -->
          </div>
        </div>
      </div>

      <div class="row">
        <div class="key U2-25 hideKey" :class="{ 'key-pressed': pressedKey === 'ShiftLeft' }" data-key="ShiftLeft">
          <div class="innerKey">
            <svg class="key-size" x="0" y="120" width="88" height="38" data-key="ShiftLeft">
              <rect class="key-size" fill="none" x="0" y="0" width="88" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Shift</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'IntlBackslash' }" data-key="IntlBackslash">
          <div class="innerKey">
            <svg class="key-size" x="370" y="120" width="38" height="38" data-key="IntlBackslash">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">
                < </text><text x="10" y="12" text-anchor="middle" dominant-baseline="middle" direction="ltr"> > </text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyZ' }" data-key="KeyZ">
          <div class="innerKey" :style="makeColor('Z')">
            <svg class="key-size" x="90" y="120" width="38" height="38" data-key="KeyZ">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">Z</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyX' }" data-key="KeyX">
          <div class="innerKey" :style="makeColor('X')">
            <svg class="key-size" x="130" y="120" width="38" height="38" data-key="KeyX">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">X</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyC' }" data-key="KeyC">
          <div class="innerKey" :style="makeColor('C')">
            <svg class="key-size" x="170" y="120" width="38" height="38" data-key="KeyC">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">C</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyV' }" data-key="KeyV">
          <div class="innerKey" :style="makeColor('V')">
            <svg class="key-size" x="210" y="120" width="38" height="38" data-key="KeyV">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">V</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyB' }" data-key="KeyB">
          <div class="innerKey" :style="makeColor('B')">
            <svg class="key-size" x="250" y="120" width="38" height="38" data-key="KeyB">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">B</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyN' }" data-key="KeyN">
          <div class="innerKey" :style="makeColor('N')">
            <svg class="key-size" x="290" y="120" width="38" height="38" data-key="KeyN">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">N</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'KeyM' }" data-key="KeyM">
          <div class="innerKey" :style="makeColor('M')">
            <svg class="key-size" x="330" y="120" width="38" height="38" data-key="KeyM">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">M</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Comma' }" data-key="Comma">
          <div class="innerKey" :style="makeColor(',')">
            <svg class="key-size" x="370" y="120" width="38" height="38" data-key="Comma">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">,</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">;</text>
            </svg>
          </div>
        </div>
        <div class="key" :class="{ 'key-pressed': pressedKey === 'Period' }" data-key="Period">
          <div class="innerKey" :style="makeColor('.')">
            <svg class="key-size" x="410" y="120" width="38" height="38" data-key="Period">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">.</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">:</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'Slash' }" data-key="Slash">
          <div class="innerKey" :style="makeColor('-')">
            <svg class="key-size" x="450" y="120" width="38" height="38" data-key="Slash">
              <rect class="key-size" fill="none" x="0" y="0" width="38" height="38"></rect><text x="10" y="27"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">-</text><text x="10" y="12"
                text-anchor="middle" dominant-baseline="middle" direction="ltr">_</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey u2-5" :class="{ 'key-pressed': pressedKey === 'ShiftRight' }" data-key="ShiftRight">
          <div class="innerKey">
            <svg class="key-size" x="490" y="120" width="108" height="38" data-key="ShiftRight">
              <rect class="key-size" fill="none" x="0" y="0" width="108" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Shift</text>
            </svg>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="key u1-25 hideKey" :class="{ 'key-pressed': pressedKey === 'ControlLeft' }" data-key="ControlLeft">
          <div class="innerKey">
            <svg class="key-size" x="0" y="160" width="58" height="38" data-key="ControlLeft">
              <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Ctrl</text>
            </svg>
          </div>
        </div>
        <div class="key u1-25 hideKey" :class="{ 'key-pressed': pressedKey === 'MetaMetaLeft' }" data-key="Meta">
          <div class="innerKey">
            <svg class="key-size" x="0" y="160" width="58" height="38" data-key="Meta">
              <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Win</text>
            </svg>
          </div>
        </div>
        <div class="key u1-25 hideKey" :class="{ 'key-pressed': pressedKey === 'AltLeft' }" data-key="AltLeft">
          <div class="innerKey">
            <svg x="60" y="160" width="58" height="38" data-key="AltLeft">
              <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Alt</text>
            </svg>
          </div>
        </div>
        <div class="key u5" :class="{ 'key-pressed': pressedKey === 'Space' }" data-key="Space">
          <div class="innerKey" :style="makeColor(' ')">
            <svg class="key-size" x="120" y="160" width="358" height="38" data-key="Space">
              <rect class="key-size" fill="none" x="0" y="0" width="358" height="38"></rect>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'AltRight' }" data-key="AltRight">
          <div class="innerKey">
            <svg class="key-size" x="480" y="160" width="58" height="38" data-key="AltRight">
              <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">AltG</text>
            </svg>
          </div>
        </div>
        <div class="key hideKey" :class="{ 'key-pressed': pressedKey === 'ControlRight' }" data-key="ControlRight">
          <div class="innerKey">
            <svg class="key-size" x="540" y="160" width="58" height="38" data-key="ControlRight">
              <rect class="key-size" fill="none" x="0" y="0" width="58" height="38"></rect><text x="10" y="20"
                text-anchor="start" dominant-baseline="middle" direction="ltr">Ctrl</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const { keys } = defineProps(['keys'])

console.log(keys)


const pressedKey = ref(null);
const shiftPressed = ref(false);

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



function makeColor(letter) {
  if (!keys) return ""
  let percentage = keys[letter] || 0
  // if (isNaN(percentage)) return ""

  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;

  // Calculate the ratio (from 0 to 1)
  const ratio = percentage / 100;

  // Interpolate the RGB values
  const red = Math.round(255 * ratio); // 0 to 255 as percentage goes from 0 to 100
  const green = Math.round(255 * (1 - ratio)); // 255 to 0 as percentage goes from 0 to 100
  const blue = 0; // Blue remains constant at 0 for the green-to-red gradient

  // Convert RGB values to a hex string
  const toHex = (value) => value.toString(16).padStart(2, '0'); // Convert to hex with padding

  const color = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;

  return `background-color:${color}; border-color:${color}`

}
</script>

<style scoped>
.keyboard {
  --unit: 65px;

  display: flex;
  align-items: center;
}

.row {
  display: flex;
}

.key {
  padding: 2px;
  width: var(--unit);
  height: var(--unit);
}

.innerKey {
  width: 100%;
  height: 100%;
  color: black;
  border: 1px solid #000000;
  background-color: #919191;
  border: 1px solid #919191;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.key.hideKey .innerKey {
  background: none;
  color: transparent;
  /* border-color: transparent; */

  color: #00cb2f;

}

.key.hideKey .innerKey svg {
  display: none;
}



.key.u0-75 {
  width: calc(var(--unit) * 0.75)
}

.key.u1-25 {
  width: calc(var(--unit) * 1.25)
}

.key.u1-5 {
  width: calc(var(--unit) * 1.5)
}

.key.u1-75 {
  width: calc(var(--unit) * 1.75)
}

.key.u2-25 {
  width: calc(var(--unit) * 2.25)
}

.key.u2-5 {
  width: calc(var(--unit) * 2.5)
}

.key.u2-75 {
  width: calc(var(--unit) * 2.75)
}

.key.u5 {
  width: calc(var(--unit) * 5)
}

rect {
  margin: 5px;
}

.key-pressed .innerKey {
  background-color: rgb(231, 231, 231);

}

.key-pressed.hideKey .innerKey svg {
  fill: white;
  display: block;
}
</style>