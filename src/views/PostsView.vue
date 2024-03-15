<script setup>
import PostTemplate from '@/components/PostTemplate.vue'
</script>

<template>
  <div class="news">
    <div class="news_sections header-container">
      <img class="news_sections header-icon" src="../assets/icons/news.png" alt="news">
      <p class="header-text">НОВОСТИ</p>
    </div>
    <div v-for="el in 5" class="news_container">
      <PostTemplate/>
    </div>
  </div>
</template>


<style lang="scss">
.news {
  padding: 20% 8%;

  &_container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

@media (min-width: 500px) {
  .news {
    padding: 18% 10%;
  }
}

@media (min-width: 768px) {
  .news {
    padding: 15% 10%;
  }
}

@media (min-width: 992px) {
  .news {
    padding: 10% 18%;
  }
}

@media (min-width: 1200px) {
  .news {
    padding: 12% 20%;
  }
}

@media (min-width: 1500px) {
  .news {
    padding: 10% 20%;
  }
}
</style>