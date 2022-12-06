<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderApp.vue';
import Main from './components/LandingApp.vue';
import Footer from './components/FooterApp.vue';


</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>

</style>
