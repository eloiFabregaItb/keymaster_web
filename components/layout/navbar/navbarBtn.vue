<template>
  <div class="navbar-btn">
    <!-- <img :src="srcIco" alt="" /> -->
    <div class="icoWrapper">
      <srcIco />
    </div>
    <div class="textWrapper">
      <span class="">
        <slot />
      </span>
    </div>
  </div>
</template>

<script setup>

const { srcIco } = defineProps(['srcIco'])



</script>

<style scoped>
.navbar-btn {
  display: flex;
  align-items: center;
  /* gap: 5px; */
  padding: 5px 20px;
  background: #FFFFFF00;


  border-radius: 5px;

  transition: all .5s ease;
}

.navbar-btn .icoWrapper {
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-btn img,
.navbar-btn svg {
  height: 30px;
  width: auto;
}

.navbar-btn span {}

.navbar-btn .textWrapper {
  overflow: hidden;
  width: 0px;

  display: flex;
  justify-content: flex-end;

  transition: all .5s ease;
}

.navbar-btn:hover {
  background: #FFFFFF55;
}

.navbar-btn:hover .textWrapper {
  width: 80px;
}




@media (width<750px) {
  .navbar-btn {
    margin-bottom: 1px solid white
  }

  .navbar-btn .textWrapper {
    width: 100%;
  }

}
</style>