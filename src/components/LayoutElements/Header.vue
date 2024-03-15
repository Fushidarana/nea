<script setup>
import {ref} from "vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
import UIInput from "@/components/UI/UIInput.vue";

const isMenu = ref(false);

window.addEventListener('resize', () => {
  if (window.innerWidth >= 500) {
    return isMenu.value = false
  }
})
</script>

<template>
  <header class="header">
    <div class="header_company-info">
      <a href="/">
        <img
            class="header_company-info__logo"
            src="../../../public/logo.png" alt="logo">
      </a>
    </div>

    <div class="header_menu_links__desktop">
      <RouterLink to="/about" class="menu_links__desktop__link">О нас</RouterLink>
      <RouterLink to="/news" class="menu_links__desktop__link">Новости</RouterLink>
      <RouterLink to="/news" class="menu_links__desktop__link">Проекты</RouterLink>
      <RouterLink to="/about" class="menu_links__desktop__link">АНО "НИСИ"</RouterLink>
      <RouterLink to="/contact" class="menu_links__desktop__link">Сотрудничество</RouterLink>
    </div>

    <BurgerMenu class="header_center-menu" @click="isMenu = !isMenu"/>

    <div class="header_right-panel">
      <UIInput type="search" icon="search" alt="search" placeholder="Найти..."/>
      <RouterLink to="/account" class="header_right-panel__button">
        <img
            src="@/assets/icons/user.png"
            alt="search"
            class="icon-input">
      </RouterLink>
    </div>

    <div class="header_menu_links" v-if="isMenu">
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/news">Новости</RouterLink>
      <RouterLink to="/news">Проекты</RouterLink>
      <RouterLink to="/about">АНО "НИСИ"</RouterLink>
      <RouterLink to="/contact">Сотрудничество</RouterLink>
    </div>

  </header>
</template>


<style lang="scss">
@import "@/assets/styles/main";

.header {
  position: fixed;
  top: 0;
  background-color: $primary0;
  box-shadow: 0 0.04rem 0.9rem 0.5rem #edf6f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2%;
  padding: 3% 5%;
  z-index: 2;
  width: 100%;
  height: auto;

  &_company-info {
    height: 100%;

    &__logo {
      height: 4rem;
    }
  }

  &_menu_links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    font-size: 1.5rem;
    font-weight: bold;
    top: 100%;
    background-color: $primary0;
    box-shadow: 0 0.04rem 0.9rem 0.5rem #edf6f9;
    width: 100%;
    left: 0;
    padding: 2rem 0;
    animation: appear 1s forwards;
  }

  &_menu_links__desktop {
    display: none;
  }

  &_right-panel {
    display: flex;
    gap: 1rem;

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .75rem 1.25rem;
      border-radius: 1.5rem;
      color: #fff;
      text-transform: uppercase;
      font-size: 1rem;
      letter-spacing: .15rem;
      transition: all .3s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      height: auto;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $secondary1;
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
        background-color: darken($secondary1, 15%);
        transition: all .3s;
        border-radius: 1.5rem;
        z-index: -1;
      }

      &:hover {
        color: #fff;

        &:before {
          width: 100%;
        }
      }
    }
  }
}

@media (min-width: 500px) {
  .header {
    padding: 2% 4%;

    &_company-info {
      &__logo {
        height: 6rem;
      }
    }

    &_menu_links {
      font-size: 2em;
      gap: 2.5rem;
    }
  }
}

@media (min-width: 992px) {
  .header {
    padding: 1% 8%;

    &_menu_links__desktop {
      display: flex;
      gap: 2rem;
      font-size: 1.7rem;
    }

    &_center-menu {
      display: none;
    }

    &_menu_links {
      display: none;
    }
  }
}

@media (min-width: 1200px) {
  .header {
    padding: 1% 8%;

    &_company-info {
      &__logo {
        height: 8rem;
      }
    }

    &_right-panel {
      width: 40%;
      padding: 2%;
      justify-content: right;

    }

    &_menu_links__desktop {
      gap: 3rem;
      font-size: 2rem;
    }
  }
}

@media (min-width: 1600px) {
  .header {
    padding: 0.3% 10%;

    &_company-info {
      &__logo {
        height: 10rem;
      }
    }

    &_right-panel {

      padding: 2%;
      justify-content: right;

    }

    &_menu_links__desktop {
      gap: 3rem;
      font-size: 2.5rem;
    }
  }
}

@keyframes appear {
  from {
    left: 4rem;
  }
  to {
    left: 0;
  }
}
</style>