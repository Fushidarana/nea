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
      <div class="sections_news header-container">
        <img class="sections_news header-icon" src="../../assets/icons/news.png" alt="news">
        <p class="header-text">НОВОСТИ</p>
      </div>
      <ShortenedPost />
      <ShortenedPost />
      <div class="read-more">
        <RouterLink to="/news" class="read-more_button">Читать все</RouterLink>
        <img class="read-more_icon" src="@/assets/icons/arrow-bar-right.png" alt="more">
      </div>
    </div>

    <div class="sections_articles">
      <div class="sections_articles header-container">
        <img class="sections_news header-icon" src="../../assets/icons/articles.png" alt="articles">
        <p class="header-text">ПУБЛИКАЦИИ</p>
      </div>
      <ShortenedPost />
      <ShortenedPost />
      <div class="read-more">
        <RouterLink to="/news" class="read-more_button">Читать все</RouterLink>
        <img class="read-more_icon" src="@/assets/icons/arrow-bar-right.png" alt="more">
      </div>
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

.read-more {
  margin-top: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite ease-in-out;

  &_button {
    background-color: $blue;
    text-transform: uppercase;
    border-radius: 1.5rem;
    border: none;
    color: $white;
    font-weight: bold;
    padding: 1rem;
    width: 20%;
    height: 20%;
    text-align: center;

    &:hover {
      background-color: $orange;
    }
  }

  &_icon {
    width: 4rem;

  }
}

@media (min-width: 500px) {
  .sections {
    padding: 3rem;
  }

  .read-more {
    &_button {
      width: 30%;
      font-size: 2rem;
    }
    &_icon {
      width: 5rem;
    }
  }
}

  @media (min-width: 992px) {
    .sections {
      padding: 3rem 9rem;
    }
    .read-more {
      &_button {
        width: 20%;
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 1200px) {
    .sections {
      padding: 4rem 25rem;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0)
    }
    50% {
      transform: translateY(-7px)
    }
    100% {
      transform: translateY(0)
    }
  }
</style>