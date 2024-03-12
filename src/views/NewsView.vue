<script setup>
import PostTemplate from '@/components/PostTemplate.vue'
</script>

<template>
  <div class="news">
    <div class="sections_news header-container">
      <img class="sections_news header-icon" src="../assets/icons/news.png" alt="news">
      <p class="header-text">НОВОСТИ</p>
    </div>
    <div v-for="el in 5">
      <PostTemplate/>
    </div>
  </div>
</template>


<style lang="scss">
.news {
  padding-top: 15%;
}
</style>