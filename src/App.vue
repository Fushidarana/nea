<script setup>
import {RouterView} from 'vue-router';
import Header from "@/components/LayoutElements/Header.vue";
import Footer from "@/components/LayoutElements/Footer.vue";
</script>

<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>
