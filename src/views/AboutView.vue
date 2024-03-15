<script setup>
import {employees} from "@/constants/data.js";
</script>

<template>
  <div class="about">
    <div class="about_academy">
      <div class="header-container">
        <img
            class="header-icon"
            src="@/assets/icons/academy-cap.png" alt="academy">
        <p class="header-text">Деятельность академии</p>
      </div>

      <img
          class="about_academy__image"
          src="@/assets/images/academy.webp" alt="academy"
      >

      <p class="plain-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur dicta
        esse et
        exercitationem quam velit veritatis vitae? Blanditiis eius, enim incidunt obcaecati optio ullam voluptas. Ab
        aliquid at consequatur consequuntur, cum delectus deleniti dolores ducimus eaque eum incidunt iusto laborum,
        magni minus mollitia necessitatibus nemo nihil nostrum nulla odio, officia officiis placeat porro provident quam
        qui quia quo recusandae repellat sapiente similique sit tempore unde ut velit veniam voluptatum. Ab, architecto
        assumenda aut consectetur consequatur expedita fugit incidunt ipsa neque numquam optio quae quaerat quam
        quibusdam, quidem quis similique tempora tempore temporibus ut! Labore placeat, sequi. Quae, ratione!</p>
    </div>

    <div class="about_history">
      <div class="header-container">
        <img
            class="header-icon"
            src="@/assets/icons/academy-cap.png" alt="academy">
        <p class="header-text">История Создания</p>
      </div>
      <p class="plain-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur dicta
        esse et
        exercitationem quam velit veritatis vitae? Blanditiis eius, enim incidunt obcaecati optio ullam voluptas. Ab
        aliquid at consequatur consequuntur, cum delectus deleniti dolores ducimus eaque eum incidunt iusto laborum,
        magni minus mollitia necessitatibus nemo nihil nostrum nulla odio, officia officiis placeat porro provident quam
        qui quia quo recusandae repellat sapiente similique sit tempore unde ut velit veniam voluptatum. Ab, architecto
        assumenda aut consectetur consequatur expedita fugit incidunt ipsa neque numquam optio quae quaerat quam
        quibusdam, quidem quis similique tempora tempore temporibus ut! Labore placeat, sequi. Quae, ratione!</p>
    </div>

    <div class="about_employees">
      <div class="header-container">
        <img
            class="header-icon"
            src="@/assets/icons/people-group.png" alt="employees">
        <p class="header-text">Сотрудники</p>
      </div>
      <div class="about_employees__employees" v-for="el in employees">
        <img class="about_employees__employees_photo" :src="el.photo" alt="photo">
        <div class="about_employees__employees_info">
          <p class="small-header">{{ el.name }}</p>
          <p class="plain-text">{{ el.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "@/assets/styles/main";

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 8% 2rem;

  &_academy {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__image {
      width: 100%;
    }
  }

  &_history {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &_employees {
    &__employees {
      padding: 2rem;
      display: flex;
      gap: 2rem;

      &_photo {
        width: 30%;
      }

      &_info {
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}

@media (min-width: 500px) {
  .about {
    gap: 3rem;
    padding: 4% 5rem;
  }
}

@media (min-width: 992px) {
  .about {
    gap: 4rem;
    padding: 2% 10%;
  }
}

@media (min-width: 1200px) {
  .about {
    gap: 5rem;
    padding: 2% 15%;

    &_employees {
      &__employees {
        padding: 2rem;
        display: flex;
        gap: 15rem;
        height: 20%;

        &_photo {
          width: 30%;
        }

        &_info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }
    }
  }

}
</style>