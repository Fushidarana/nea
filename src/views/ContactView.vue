<template>
  <form @submit.prevent="sendEmail" class="contact">
    <div class="header-container">
      <img
          class="header-icon"
          src="@/assets/icons/academy-cap.png" alt="academy">
      <p class="header-text">Сотрудничество</p>
    </div>

    <div class="contact_info">
      <div class="small-header">Адрес: <p class="highlight-text">ул.Пушкина, дом Колотушкина</p></div>
      <div class="small-header">Почта: <p class="highlight-text">nea@gmail.com</p></div>
      <div class="small-header">Номер: <p class="highlight-text">8-800-555-35-35</p></div>
      <div class="small-header">Соц-сети: <p class="highlight-text">tme: @nea</p></div>
    </div>

    <div class="contact_form">
      <p class="contact_form_header header-text">Связаться с нами</p>
      <input class="contact_form_input" v-model="name" type="text" placeholder="Имя" required>
      <div class="line"/>
      <input class="contact_form_input" v-model="email" type="email" placeholder="Электронная почта" required>
      <div class="line"/>
      <textarea class="contact_form_input" v-model="message" placeholder="Комментарий"/>
      <div class="line"/>
      <UIButton text="Отправить"/>
    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";
import UIButton from "@/components/UI/UIButton.vue";

const name = ref('')
const email = ref('')
const message = ref('')

async function sendEmail() {
  // try {
  //   const payload = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   await axios.post(
  //       "https://....com",
  //       payload
  //   );
  // } catch (error) {
  //   console.error(error?.response?.data || error?.message || error);
  // } finally {
  //   console.info("end send mail");
  // }
}

</script>

<style lang="scss">
@import "@/assets/styles/main";

.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 7%;

  &_form {
    background-color: $secondary1;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 5%;

    &_header {
      padding-bottom: 2rem;
    }

    &_input {
      background: transparent;
      all: unset;
      font-size: 2rem;
    }
  }

  &_info {
    padding: 2rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

.line {
  width: 100%;
  height: 1px;
  margin-bottom: 5.2rem;
  background-color: $secondary2;
}

textarea {
  background: transparent;
  outline: none;
  border: none;
  font-size: 2rem;
  width: 100%;
  min-height: 18.9rem;
  height: auto;
  padding-top: 2%;
}

::-webkit-input-placeholder {
  font-size: 2rem;
}


@media (min-width: 500px) {
  .contact {
    padding: 5% 10% 7% 10%;
  }
}

@media (min-width: 1200px) {
  .contact {
    padding: 2% 20% 7% 20%;

      &_form {
        width: 60%;
      }

      &_data {
        width: 50%;
      }
    }
  }

</style>