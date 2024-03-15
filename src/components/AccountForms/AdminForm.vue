<template>
  <div class="admin">
    <div class="header-container">
      <img
          class="header-icon"
          src="@/assets/icons/add-user.png" alt="add-user">
      <p class="header-text">Создание сотрудника</p>
    </div>

    <UserAutorizationForm />

    <div class="header-container">
      <img
          class="header-icon"
          src="@/assets/icons/write.png" alt="write">
      <p class="header-text">Создание поста</p>
    </div>

    <div class="admin_create-post_container">
      <select>
        <option>Статья</option>
        <option>Проект</option>
        <option>Мероприятие</option>
        <option>Новость</option>
      </select>
      <Editor
          api-key="2rjklnm2jyugr9igoegz1rcvnfwu2zv5qzfcc6towbobgi5t"
          :init="{
            plugins:'numlist bullist anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tableofcontents footnotes mergetags autocorrect typography inlinecss',
             selector: 'textarea',
             toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | indent outdent image emoticons| checklist numlist bullist ',
             width: '90%',
             height: '50vh'
      }"
          initial-value="Введите публикацию..."
      />
    </div>

      <UIButton text="Сохранить"/>

  </div>
</template>

<script setup>

import Editor from "@tinymce/tinymce-vue";
import UIButton from "@/components/UI/UIButton.vue";
import UserAutorizationForm from "@/components/AccountForms/UserAutorizationForm.vue";
</script>

<style lang="scss">
@import "@/assets/styles/main";
.admin {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &_create-post_container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }


}
  select {
    appearance: none;
    border: 0;
    outline: 0;
    font: inherit;
    width: 20rem;
    padding: 1rem 4rem 1rem 1rem;
    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center / 1.4em,
    linear-gradient(to left, $primary1 3em, $secondary1 3em);
    color: $black;
    border-radius: 1.5rem;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }

    &:focus {
      outline: none;
    }
    option {
      color: inherit;
      background-color: $secondary1;
    }
  }

  @media (min-width: 992px) {
    select {
      font-size: 2rem;
    }

    .admin {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &_create-post_container {
        width: 80%;
      }
    }
  }

</style>