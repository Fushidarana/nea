<template>
  <div class="authorization">
    <UIInput class="authorization_input" icon="user" type="text" placeholder="Введите логин..." alt="login"/>
    <UIInput class="authorization_input" icon="email" type="email" placeholder="Введите почту..." alt="email"/>
    <UIInput class="authorization_input" icon="password" type="password" placeholder="Введите пароль..." alt="password"/>

  </div>
  <UIButton text="Сохранить"/>
</template>

<script setup>
import UIButton from "@/components/UI/UIButton.vue";
import UIInput from "@/components/UI/UIInput.vue";
</script>

<style lang="scss" scoped>
.authorization {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>