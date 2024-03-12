<script>
import {defineComponent} from "vue";
import ShortenedPost from "@/components/ShortenedPost.vue";
import UIButton from "@/components/UI/UIButton.vue";

export default defineComponent({
  components: {UIButton, ShortenedPost}
})
</script>

<template>
  <div class="sections">
    <div class="sections_news">
      <div class="sections_news__header">
        <img class="sections_news__header__icon" src="@/assets/icons/news.png" alt="news">
        <p>НОВОСТИ</p>
      </div>
      <ShortenedPost />
      <ShortenedPost />
    </div>

    <div class="sections_articles">
      <div class="sections_articles__header">
        <img class="sections_news__header__icon" src="@/assets/icons/articles.png" alt="articles">
        <p>ПУБЛИКАЦИИ</p>
      </div>
      <ShortenedPost />
      <ShortenedPost />
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
  padding: 2rem ;

  &_news {
    &__header {
      @include sub-headers;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &__icon {
        width:2rem;
      }
    }
  }

  &_articles {
    &__header {
      @include sub-headers;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &__icon {
        width:2rem;
      }
    }
  }
}

</style>