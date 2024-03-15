<script setup>
const props = defineProps({
  text: {type: String}
})
</script>

<template>
    <div class="short-post">
      <p class="small-header">Крутой заголовок</p>
      <p class="highlight-text">03.03.1003</p>
      <p class="plain-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur dolore, doloribus ducimus est impedit itaque laborum mollitia natus nesciunt nihil officia pariatur quaerat quas quod sunt vitae? Consequatur cumque eos incidunt itaque modi mollitia saepe veritatis, vero voluptas? Harum laboriosam quibusdam recusandae repellendus repudiandae sed suscipit unde voluptates? Accusantium aperiam corporis dicta doloribus eos expedita in libero minus mollitia natus nisi obcaecati odio possimus recusandae repellat saepe, temporibus totam voluptas! Atque aut doloribus ea eaque, eligendi enim est eum eveniet ipsa labore laborum magni minus nihil nulla, officiis repudiandae similique soluta! Autem blanditiis deleniti iure quod? Accusamus, debitis, velit.</p>
    </div>
</template>


<style lang="scss">
@import "@/assets/styles/main";
.short-post {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2.5rem;
}

@media (min-width: 500px) {
  .short-post {
    padding: 1rem 3.5rem;
  }
}

@media (min-width: 992px) {
  .short-post {
    padding: 1rem 4.5rem;
  }
}

@media (min-width: 1200px) {
  .short-post {
    padding: 1rem 5.5rem;
  }
}

</style>