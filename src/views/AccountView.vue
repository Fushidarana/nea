<script setup>
import AdminForm from "@/components/AccountForms/AdminForm.vue";
import UserAutorizationForm from "@/components/AccountForms/UserAutorizationForm.vue";
import UIButton from "@/components/UI/UIButton.vue";
</script>

<template>
  <div class="account">
    <div class="header-container">
      <img
          class="header-icon"
          src="@/assets/icons/academy-cap.png" alt="academy">
      <p class="header-text">Изменить пароль</p>
    </div>

    <UserAutorizationForm />
    <AdminForm />


    <div class="account_only-user">
      <div class="header-container">
        <img
            class="header-icon"
            src="@/assets/icons/academy-cap.png" alt="academy">
        <p class="header-text">Стать одним из нас</p>
      </div>
      <UIButton text="Оставить заявку"/>
    </div>

    <div class="account_only-user">
      <div class="header-container">
        <img
            class="header-icon"
            src="@/assets/icons/articles.png" alt="articles">
        <p class="header-text">Получать новостную рассылку</p>
      </div>
      <UIButton text="Подписаться"/>
      <div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.account {
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &_only-user {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (min-width: 500px) {
  .account {
    padding: 6rem 7rem;
    gap: 2rem;
  }
}

@media (min-width: 992px) {
  .account {
    padding: 9rem 15rem;
  }
}

@media (min-width: 1200px) {
  .account {
    padding: 1.5% 25rem;
    &_only-user {
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }
  }
}
</style>