<script setup>
import { onMounted } from 'vue'
import user from '../stores/User'
import Post from '../components/PostApp.vue';
import NavBottom from '../components/NavBottomApp.vue';
import { posts } from '../stores/PostStore';
import { getPosts } from '../firebase/posts';
import { getComments } from '../firebase/comments';

onMounted(()=> {
    getPosts()
    getComments()
})
</script>

<template>
    <Post v-for="post in posts" :post="post" :key="post.id"/>
    <NavBottom />
</template>