<script setup>
const props = defineProps({
  text: {type: String}
})
</script>

<template>
    <div class="short-post">
      <p class="short-post_header">Крутой заголовок</p>
      <p class="short-post_date">03.03.1003</p>
      <p class="short-post_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur dolore, doloribus ducimus est impedit itaque laborum mollitia natus nesciunt nihil officia pariatur quaerat quas quod sunt vitae? Consequatur cumque eos incidunt itaque modi mollitia saepe veritatis, vero voluptas? Harum laboriosam quibusdam recusandae repellendus repudiandae sed suscipit unde voluptates? Accusantium aperiam corporis dicta doloribus eos expedita in libero minus mollitia natus nisi obcaecati odio possimus recusandae repellat saepe, temporibus totam voluptas! Atque aut doloribus ea eaque, eligendi enim est eum eveniet ipsa labore laborum magni minus nihil nulla, officiis repudiandae similique soluta! Autem blanditiis deleniti iure quod? Accusamus, debitis, velit.</p>
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

  &_header {
    font-size: 2rem;
    font-weight: bold;
    color: $black;
  }

  &_date {
    font-size: 1.5rem;
    color: $orange;
    font-weight: bold;
  }

  &_text {
    font-size: 1.3rem;
    font-family: "Arial";
    color: $grey;
  }
}

</style>