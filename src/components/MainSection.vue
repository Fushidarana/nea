<script setup>
</script>

<template>
  <div class="main">
    <div class="main__bg"></div>
    <p class="main__title">НОВОСИБИРСКАЯ ЭКОЛОГИЧЕСКАЯ АКАДЕМИЯ</p>

  </div>
</template>


<style lang="scss">
@import "@/assets/styles/main";

.main {
  height: 100vh;
  color: $black;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url("@/assets/images/novosibirsk.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &__bg {
    width: 100%;
    background-color: rgba(19, 19, 19, 0.41);
    position: absolute;
    height: 100vh;
  }

  &__title {
    @include headers;
    color: #FFFFFA;
    text-align: center;
    z-index: 2;
  }

}

</style>