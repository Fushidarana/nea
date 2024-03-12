<script>
</script>

<template>
  <footer class="footer">
    <div class="footer_list">
      <p class="small-header">Новосибирская Экологическая Академия:</p>
      <a href="#">О нас</a>
      <a href="#">Новости</a>
      <a href="#">Проекты</a>
      <a href="#">АНО "НИСИ"</a>
      <a href="#">Сотрудничество</a>
    </div>

    <div class="footer_contact">
      <p class="small-header">Сотрудничество:</p>
      <p>8-800-555-35-35</p>
      <p>nea@gmail.com</p>
    </div>
  </footer>
</template>


<style lang="scss">
@import "@/assets/styles/main";
.footer {
  color: $white;
  background-color: $grey;
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

@media (min-width: 500px) {
  .footer {
    padding: 3rem 6rem;
    font-size: 2rem;
  }
}

@media (min-width: 992px) {
  .footer {
    font-size: 3rem;
  }
}

@media (min-width: 1200px) {
  .footer {
    padding: 4rem 8rem;
    font-size: 3rem;
  }
}

//@media (min-width: 500px) {
//
//}
//
//@media (min-width: 992px) {
//
//}
//
//@media (min-width: 1200px) {
//
//}
</style>