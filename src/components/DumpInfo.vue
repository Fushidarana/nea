<script setup>
import UIButton from "@/components/UI/UIButton.vue";
import Editor from '@tinymce/tinymce-vue';
</script>

<template>
  <div class="dump_info">
    <p class="dump_info__header">ОСТАВЬТЕ ИНФОРМАЦИЮ О ТОЧКЕ</p>
    <Editor
        api-key="2rjklnm2jyugr9igoegz1rcvnfwu2zv5qzfcc6towbobgi5t"
        :init="{
            plugins:'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tableofcontents footnotes mergetags autocorrect typography inlinecss',
             selector: 'textarea',
             toolbar: false,
             width: '90%',
             height: '50vh'
      }"
        initial-value="Опишите свалку или прикрепите изображение..."
    >

    </Editor>
    <UIButton text="Отправить"/>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main";

.dump_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
</style>