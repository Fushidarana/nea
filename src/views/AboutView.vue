<script setup>
import {employees} from "@/constants/data.js";
</script>

<template>
  <div class="about">
    <div class="academy">
      <div class="header-container">
        <img
            class="header-icon"
            src="@/assets/icons/academy-cap.png" alt="academy">
        <p>Деятельность академии</p>
      </div>
      <img
          class="about_academy__image"
          src="@/assets/images/academy.webp" alt="academy"
      >
      <p class="about_academy_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur dicta esse et
        exercitationem quam velit veritatis vitae? Blanditiis eius, enim incidunt obcaecati optio ullam voluptas. Ab
        aliquid at consequatur consequuntur, cum delectus deleniti dolores ducimus eaque eum incidunt iusto laborum,
        magni minus mollitia necessitatibus nemo nihil nostrum nulla odio, officia officiis placeat porro provident quam
        qui quia quo recusandae repellat sapiente similique sit tempore unde ut velit veniam voluptatum. Ab, architecto
        assumenda aut consectetur consequatur expedita fugit incidunt ipsa neque numquam optio quae quaerat quam
        quibusdam, quidem quis similique tempora tempore temporibus ut! Labore placeat, sequi. Quae, ratione!</p>
    </div>
    <div class="history">
      <div class="header-container">
        <img
            class="header-icon"
            src="@/assets/icons/academy-cap.png" alt="academy">
        <p>История Создания</p>
      </div>
      <p class="about_academy_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur dicta esse et
        exercitationem quam velit veritatis vitae? Blanditiis eius, enim incidunt obcaecati optio ullam voluptas. Ab
        aliquid at consequatur consequuntur, cum delectus deleniti dolores ducimus eaque eum incidunt iusto laborum,
        magni minus mollitia necessitatibus nemo nihil nostrum nulla odio, officia officiis placeat porro provident quam
        qui quia quo recusandae repellat sapiente similique sit tempore unde ut velit veniam voluptatum. Ab, architecto
        assumenda aut consectetur consequatur expedita fugit incidunt ipsa neque numquam optio quae quaerat quam
        quibusdam, quidem quis similique tempora tempore temporibus ut! Labore placeat, sequi. Quae, ratione!</p>
    </div>
    <div class="employees">
      <div class="header-container">
        <img
            class="header-icon"
            src="@/assets/icons/people-group.png" alt="employees">
        <p>Сотрудники</p>
      </div>
      <div class="employees__employees" v-for="el in employees">
        <img class="employees__employees_photo" :src="el.photo" alt="photo">
        <div class="employees__employees_info">
          <p>{{el.name}}</p>
          <p>{{el.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 15%;

  &_academy {
    &__image {
      width: 20rem;
    }
  }
}

.employees {
  &__employees {
    display: flex;
    &_photo {
      width: 30%;
    }
    &_info {

    }
  }
}

</style>