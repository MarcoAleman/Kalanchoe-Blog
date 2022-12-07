<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderApp.vue';
import Main from './components/LandingApp.vue';



</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
