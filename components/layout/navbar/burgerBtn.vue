<template>

  <div class="menu-btn" :class="{ open: isOpen }" :onclick="handleOpen">
    <div class="menu-btn_burger">
    </div>
  </div>

</template>

<script setup>

const emit = defineEmits(['click'])
const { isOpen } = defineProps(['isOpen'])


function handleOpen() {
  emit('click')
}

</script>

<style scoped>
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  cursor: pointer;
  transition: all .5s ease-in-out;
}

.menu-btn_burger {
  width: 40px;
  height: 3px;
  background-color: white;
  border-radius: 5px;

  box-shadow: 0 2px 5px rgba(255, 201, 47, .2);
  transition: all .5s ease-in-out;
}

.menu-btn_burger::before,
.menu-btn_burger::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 3px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 201, 47, .2);
  transition: all .5s ease-in-out;
}

.menu-btn_burger::before {
  transform: translateY(-.7rem);
}

.menu-btn_burger::after {
  transform: translateY(.7rem);
}

.menu-btn.open .menu-btn_burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}

.menu-btn.open .menu-btn_burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}

.menu-btn.open .menu-btn_burger::after {
  transform: rotate(-45deg) translate(35px, 35px);

}
</style>