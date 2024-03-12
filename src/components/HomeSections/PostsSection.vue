<script>
import {defineComponent} from "vue";
import ShortenedPost from "@/components/ShortenedPost.vue";
import UIButton from "@/components/UI/UIButton.vue";
import UIReadMoreButton from "@/components/UI/UIReadMoreButton.vue";

export default defineComponent({
  components: {UIReadMoreButton, UIButton, ShortenedPost}
})
</script>

<template>
  <div class="sections">
    <div class="sections_news">
      <div class="sections_news header-container">
        <img class="sections_news header-icon" src="../../assets/icons/news.png" alt="news">
        <p class="header-text">НОВОСТИ</p>
      </div>
      <ShortenedPost />
      <ShortenedPost />
      <UIReadMoreButton text="читать все" />
    </div>

    <div class="sections_articles">
      <div class="sections_articles header-container">
        <img class="sections_news header-icon" src="../../assets/icons/articles.png" alt="articles">
        <p class="header-text">ПУБЛИКАЦИИ</p>
      </div>
      <ShortenedPost />
      <ShortenedPost />
      <UIReadMoreButton text="читать все" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main";

.sections {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 3rem;
}

@media (min-width: 500px) {
  .sections {
    padding: 3rem;
  }
}

  @media (min-width: 992px) {
    .sections {
      padding: 3rem 9rem;
    }
  }

  @media (min-width: 1200px) {
    .sections {
      padding: 4rem 25rem;
    }
  }
</style>