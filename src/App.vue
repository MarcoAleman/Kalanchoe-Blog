<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderApp.vue';
import Main from './components/LandingApp.vue';



</script>

<template>
  <Header />
  <main class="d-flex flex-column justify-content-center align-items-center">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
