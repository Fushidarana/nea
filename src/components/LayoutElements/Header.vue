<script setup>
import {ref} from "vue";
import BurgerMenu from "@/components/BurgerMenu.vue";

const isMenu = ref(false)
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

    <div class="menu_links__desktop">
      <RouterLink to="/about" class="menu_links__desktop__link">О нас</RouterLink>
      <RouterLink to="/" class="menu_links__desktop__link">Новости</RouterLink>
      <RouterLink to="/" class="menu_links__desktop__link">Проекты</RouterLink>
      <RouterLink to="/" class="menu_links__desktop__link">АНО "НИСИ"</RouterLink>
      <RouterLink to="/" class="menu_links__desktop__link">Сотрудничество</RouterLink>
    </div>

    <BurgerMenu class="header_center-menu" @click="isMenu = !isMenu"/>

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

    <div class="menu_links" v-if="isMenu">
      <RouterLink to="/about" class="menu_links__link">О нас</RouterLink>
      <RouterLink to="/" class="menu_links__link">Новости</RouterLink>
      <RouterLink to="/" class="menu_links__link">Проекты</RouterLink>
      <RouterLink to="/" class="menu_links__link">АНО "НИСИ"</RouterLink>
      <RouterLink to="/" class="menu_links__link">Сотрудничество</RouterLink>
    </div>

  </header>
</template>


<style lang="scss">
@import "@/assets/styles/main";

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 1rem 2rem;
  background: $white;
  box-shadow: 0 0.04rem 0.6rem 0.1rem $black;

  &_company-info {
    &__logo {
      width: 3rem;
    }
  }

  &_right-panel {
    display: flex;
    height: 2.5rem;
    gap: 1rem;

    &__button {
      background-color: $light-grey;
      border: none;
      border-radius: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    &__input {
      background-color: $light-grey;
      border-radius: 1.5rem;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
    }
  }
}

.menu_links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  position: absolute;
  width: calc(100% + 2rem);
  top: 100%;
  left: 0;
  background: $white;

  &__link {
    color: $black;
    font-size: 1.5rem;

    &:hover {
      color: $yellow;
    }
  }
}

.menu_links__desktop {
  display: none;

  &__link {
    font-size: 2rem;
    color: $black;

    &:hover {
      color: $orange;
    }
  }

}

@media (min-width: 500px) {
  .header {
    height: 5rem;
    padding: 1.5rem;

    &_company-info {
      &__logo {
        width: 4rem;
      }
    }

    &_right-panel {
      max-height: 3rem;
      gap: 3rem;

      &__input {
        width: 90%;
        gap: 1rem;
        padding: 1rem;
      }
    }
  }
}

@media (min-width: 992px) {
  .header {
    height: 6rem;
    padding: 1rem 2rem;

    &_company-info {
      &__logo {
        width: 5rem;
      }
    }

    &_right-panel {
      width: 40%;
      height: 5rem;
      gap: 2rem;

      &__input {
        height: 100%;
      }
    }
  }

  .header_center-menu {
    display: none;
  }

  .menu_links__desktop {
    display: flex;
    gap: 4rem;
  }
}

@media (min-width: 1200px) {
  .header {
    height: 9rem;
    padding: 2rem 18rem;

    &_company-info {
      &__logo {
        width: 6rem;
      }
    }

    &_right-panel {
      width: 30%;
      height: 7rem;
      gap: 2rem;

      &__input {
        height: 100%;
      }
    }
  }
}
</style>