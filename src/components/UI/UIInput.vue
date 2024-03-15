<template>
  <div class="input_container">
    <img v-if="props.icon" :src="getImageUrl(props.icon)" :alt="props.alt" class="icon-input">
    <input :type="props.type" :placeholder="props.placeholder">
  </div>
</template>

<script setup>
const props = defineProps({
  type: {type: String},
  placeholder: {type: String},
  icon: {type: String},
  alt: {type: String},
})

const getImageUrl = (path) => {
  return new URL(`../../assets/icons/${path}.png`, import.meta.url).href;
};
</script>

<style lang="scss">
</style>