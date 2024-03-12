<script setup>
import {RouterView} from 'vue-router'
import BurgerMenu from "@/components/BurgerMenu.vue";
</script>

<template>
  <header class="header">
    <div class="header_company-info">
      <a href="/">
        <img
            class="header_company-info__logo"
            src="../public/logo.png" alt="logo">
      </a>
    </div>

    <BurgerMenu class="header_center-menu"/>

    <div class="header_right-panel">
      <div class="header_right-panel__input">
        <img
            src="@/assets/icons/search.png"
            alt="search"
        class="icon">
        <input type="search">
      </div>
      <button class="header_right-panel__button">
        <img
            src="@/assets/icons/user.png"
            alt="search"
            class="icon">
      </button>
    </div>

  </header>

  <RouterView/>

  <footer class="footer">
    <div class="footer_list">
      <p>Новосибирская Экологическая Академия:</p>
      <a href="#">О нас</a>
      <a href="#">Новости</a>
      <a href="#">Проекты</a>
      <a href="#">АНО «НИСИ</a>
      <a href="#">«Сотрудничество»</a>
    </div>

    <div class="footer_contact">
      <p>Сотрудничество:</p>
      <p>8-800-555-35-35</p>
      <p>nea@gmail.com</p>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/styles/main";

.header {
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 4rem;
  padding: 1rem;
  background: $white;
  box-shadow: 0 0.04rem 0.6rem 0.1rem $dark-blue;

  &_company-info {

    &__logo {
      width: 3rem;
    }

    &__header {
      @include headers;
    }
  }

  &_right-panel {
    display: flex;
    max-height: 2.5rem;
    gap: 1rem;

    &__button {
      @include icon-buttons;
    }

    &__input {
      @include input;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
    }
  }
}


.footer {
  color: $white;
  background-color: $dark-blue;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  &_list {
    display: flex;
    flex-direction: column;
  }

  &_contact {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
}

</style>
