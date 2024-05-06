<template>
  <div class="ProfilePicWrapper"
    :class="{ 'big': Boolean(big), 'small': Boolean(small), 'superSmall': Boolean(superSmall) }">
    <div class="ProfilePic" :style="`background: url(${src})`">
      <span v-if="isOnline" class="isOnline"></span>
      <span v-else-if="isOffline" class="isOffline"></span>
    </div>
  </div>
</template>

<script setup>


const { src, isOnline, isOffline, big, small, superSmall } = defineProps(['src', 'isOnline', 'isOffline', 'big', 'small', 'superSmall'])

</script>

<style scoped>
.ProfilePicWrapper {
  --size: 70px;
}

.ProfilePicWrapper.big {
  --size: 200px;
}

.ProfilePicWrapper.small {
  --size: 50px;
}

.ProfilePicWrapper.superSmall {
  --size: 32px;
}

.ProfilePicWrapper {
  --size-small: calc(var(--size)/6);
  --alpha: 315deg;
  --rad: calc(var(--size)/2);
}

.ProfilePicWrapper {
  border: 2px solid #9c73ff;
  background-color: #9c73ff;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);

  display: flex;
  align-items: center;
  justify-content: center;
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
