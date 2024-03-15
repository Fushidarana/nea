<script setup>

const props = defineProps({
  text: {type: String}
})
</script>

<template>
  <button class="ui-button">{{ props.text }}</button>
</template>


<style lang="scss">
@import "@/assets/styles/main";

.ui-button {
  padding: 1.2rem;
  outline: none;
  border-radius: 2rem;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $primary2;
    border-radius: 1.5rem;
    z-index: -2;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken($primary2, 15%);
    transition: all .3s;
    border-radius: 1.5rem;
    z-index: -1;
  }

  &:hover {
    color: #fff;

    &:before {
      width: 100%;
    }
  }}


@media (min-width: 500px) {
  .ui-button {
    width: 20%;
    padding: 2rem;
  }
}

@media (min-width: 992px) {
  .ui-button {
    width: 40%;
    font-size: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .ui-button {
    width: 20%;
  }
}

</style>