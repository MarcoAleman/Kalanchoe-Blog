<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import user from './stores/User';
import Header from './components/HeaderApp.vue';
import Main from './components/LandingApp.vue';

onMounted(()=>{
  let localUser = JSON.parse(localStorage.getItem('user'))
  if(localUser){
    user.value = {
      ...localUser
    }
  }
})

</script>

<template>
  <Header />
  <main class="d-flex flex-column justify-content-center align-items-center">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
