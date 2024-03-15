<script setup>
import Editor from '@tinymce/tinymce-vue';
import UIButton from "@/components/UI/UIButton.vue";
</script>

<template>
  <div class="dump_info">
    <p class="small-header">ОСТАВЬТЕ ИНФОРМАЦИЮ О ТОЧКЕ</p>
    <div class="dump_info_editor">
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
    </div>
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
  gap: 2rem;
  text-align: center;
  border-radius: 3rem;
  background: $base;
  min-width: 80%;
  height: auto;
  padding: 3rem 2rem;
  margin: 4rem 10%;

  &_editor {
    height: auto;
    width: 100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>