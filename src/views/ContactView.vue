<template>
  <form @submit.prevent="sendEmail" class="contact">
    <div class="header-container">
      <img
          class="header-icon"
          src="@/assets/icons/academy-cap.png" alt="academy">
      <p class="header-text">Сотрудничество</p>
    </div>
    <div class="contact_info">
      <div class="contact_info_data">
        <div class="small-header">Адрес: <p class="highlight-text">ул.Пушкина, дом Колотушкина</p></div>
        <div class="small-header">Почта: <p class="highlight-text">nea@gmail.com</p></div>
        <div class="small-header">Номер: <p class="highlight-text">8-800-555-35-35</p></div>
        <div class="small-header">Соц-сети: <p class="highlight-text">tme: @nea</p></div>
      </div>
      <div class="contact_info_form">
        <p class="header-text">Связаться с нами</p>
        <input v-model="name" type="text" placeholder="Имя" required>
        <div class="line"/>
        <input v-model="email" type="email" placeholder="Электронная почта" required>
        <div class="line"/>
        <textarea v-model="message" placeholder="Комментарий"/>
        <div class="line"/>
        <button style="cursor: pointer">Отправить</button>
      </div>

    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";

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
  //       "https://webform.dkotrack.com/api/new/desilaza.com",
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
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  &_info {
    padding: 2rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &_form {
      width: 100%;
      padding: 8% 7%;
      background-color: $light-grey;
      border-radius: 1.5rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
}

.line {
  width: 100%;
  height: 1px;
  margin-bottom: 5.2rem;
  background-color: $grey;
}

button {
  border-radius: 3rem;
  border: none;
  font-size: 2rem;
  padding: 2rem 6rem;
  margin-top: 2%;
  font-weight: 800;
}

input {
  background: transparent;
  all: unset;
  font-size: 2rem;
  padding-bottom: 1.9rem;
}

textarea {
  background: transparent;
  outline: none;
  border: none;
  font-size: 2rem;
  width: 100%;
  height: 18.9rem;
  padding-top: 2%;
}

textarea::placeholder {
}

::-webkit-input-placeholder {
  font-size: 2rem;
}

@media (min-width: 992px) {
  .contact {
    align-items: center;
    padding: 7rem 10rem;

    &_info {
      flex-direction: row;
      &_form {
        width: 50%;
      }

      &_data {
        width: 50%;
      }
    }
  }
}

@media (min-width: 1200px) {
  .contact {
    padding: 7rem 25rem;

    &_info {
      flex-direction: row;
      &_form {
        width: 50%;
      }

      &_data {
        width: 50%;
      }
    }
  }
}

</style>