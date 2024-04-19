<template>

  <div class="ProfilePic" :style="`background: url(${src})`">
    <span v-if="isOnline" class="isOnline"></span>
    <span v-else-if="isOffline" class="isOffline"></span>
  </div>
</template>

<script setup>

const { src, isOnline, isOffline } = defineProps(['src', 'isOnline', 'isOffline'])



</script>

<style scoped>
.ProfilePic {

  --size: 500px;

  width: var(--size);
  height: var(--size);

  background-position: center !important;
  background-size: cover !important;

  border-radius: 50%;
  border: 3px solid black;

  position: relative;


}

.ProfilePic .isOffline,
.ProfilePic .isOnline {
  position: absolute;
  /* border: 3px solid black; */
  bottom: calc(var(--size) / (2 * sqrt(2)));
  right: calc(var(--size) / (2 * sqrt(2)));

  height: 10px;
  width: 10px;

  border-radius: 50%;
}

.ProfilePic .isOnline {
  background-color: #30FF30;
}

.ProfilePic .isOffline {
  background-color: #EA3030;
}
</style>
