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
  @include buttons;

  &:hover {
    background-color: $orange;
  }
}

</style>