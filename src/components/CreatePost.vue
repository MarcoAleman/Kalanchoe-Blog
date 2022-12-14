<script setup>
import user from '../stores/User.js';
import { addPost } from '../firebase/posts';
import { ref } from 'vue';
import Swal from 'sweetalert2'

const description = ref('');
const URLimg = ref('');
const title = ref('');

const addNewPost = () => {
    let newPost = {
        id: crypto.randomUUID(),
        date: Date.now(),
        author: user.value.displayName,
        photoAuthor: user.value.photoURL,
        title: title.value,
        photo: URLimg.value,
        body: description.value,
    }
    addPost(newPost)
    title.value = '';
    URLimg.value = '';
    description.value = '';
    create()
}

const create = () => {
    Swal.fire({
        icon: 'success',
        title: 'Post Created!',
        showConfirmButton: false,
        timer: 1500
    })
    //this.$router.push('post');
}
</script>

<template>
    <form @submit.prevent="addNewPost" class="ctn contact mt-5 mb-3 p-2 py-3 d-flex flex-column text-center">
        <h2>Create a new Post!</h2>
        <div class="input-ctn" data-validate="Title is required">
            <label for="title">Title</label>
            <input v-model="title" type="text" id="title" placeholder="Your title">
        </div>
        <div class="input-ctn " data-validate="Name is required">
            <label for="name">URL image</label>
            <input v-model="URLimg" type="text" id="name" placeholder="Your url image">
        </div>
        <div class="input-ctn" data-validate="Name is required">
            <label for="name">Post body</label>
            <textarea v-model="description" type="text" id="name" placeholder="Your pos description"></textarea>
        </div>
        <button class="btn btn-form">Create</button>
    </form>
</template>