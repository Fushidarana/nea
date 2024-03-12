<script setup>
import {ref} from "vue";
import UIButton from "@/components/UI/UIButton.vue";

// const showDialog = ref(true)
//
// function closeDialog(e) {
//   const clickedElement = e.target
//   const element = document.querySelector('.dialog')
//   if(element === clickedElement) {
//     showDialog.value = false
//   }
// }

</script>

<template>
  <div class="dump-info">
    <div class="dialog_info">
      <p class="dialog_info__header">ОСТАВЬТЕ ИНФОРМАЦИЮ О ТОЧКЕ</p>
      <UIButton text="Отправить"/>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main";
.dialog {
  display: flex;
  justify-content: center;
  align-items: center;

  &_info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    background: $white;
    min-width: 80%;
    height: auto;
    padding: 2rem;
    margin: 1rem;

    &__header {
      @include sub-headers;
    }
  }
}
</style>