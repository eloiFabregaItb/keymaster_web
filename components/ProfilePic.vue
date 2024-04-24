<template>

  <div class="ProfilePic" :class="{ 'big': Boolean(big), 'small':Boolean(small) }" :style="`background: url(${src})`">
    <span v-if="isOnline" class="isOnline"></span>
    <span v-else-if="isOffline" class="isOffline"></span>
  </div>
</template>

<script setup>

const { src, isOnline, isOffline, big, small } = defineProps(['src', 'isOnline', 'isOffline', 'big', 'small'])

</script>

<style scoped>
.ProfilePic {
  --size: 70px;
  --size-small: calc(var(--size)/6);
  --alpha: 315deg;
  --rad: calc(var(--size)/2);
}


.ProfilePic.big {
  --size: 200px;
  --size-small: calc(var(--size)/6);
  --alpha: 315deg;
  --rad: calc(var(--size)/2);
}

.ProfilePic.small {
  --size: 50px;
  --size-small: calc(var(--size)/6);
  --alpha: 315deg;
  --rad: calc(var(--size)/2);
}

.ProfilePic {
  width: var(--size);
  height: var(--size);

  background-position: center !important;
  background-size: cover !important;

  border-radius: 50%;
  /* border: 3px solid black; */

  position: relative;


}

.ProfilePic .isOffline,
.ProfilePic .isOnline {
  position: absolute;
  /* border: 3px solid black; */
  left: calc(50% + var(--rad) * cos(var(--alpha)));
  top: calc(50% - var(--rad) * sin(var(--alpha)));

  height: var(--size-small);
  width: var(--size-small);

  border-radius: 50%;

  transform: translate(-50%, -50%);
}

.ProfilePic .isOnline {
  background-color: #30FF30;
}

.ProfilePic .isOffline {
  background-color: #EA3030;
}
</style>
