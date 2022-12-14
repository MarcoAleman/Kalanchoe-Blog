<script setup>
import user from '../stores/User.js';
import { addPost } from '../firebase/posts';
import { ref } from 'vue';
import Swal from 'sweetalert2'

const name = ref('');
const email = ref('');
const message = ref('');

/* const addNewPost = () => {
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
} */

const send = () => {
    Swal.fire({
        icon: 'success',
        title: 'Message sent!',
        showConfirmButton: false,
        timer: 1500
    })
    email.value = '';
    name.value = '';
    message.value = '';
}
</script>

<template>
    <form @submit.prevent="send" class="ctn contact p-2 py-3 d-flex flex-column text-center">
        <h2>Contact Us!</h2>
        <div class="input-ctn " data-validate="Name is required">
            <label for="name">Name</label>
            <input v-model="name" type="text" id="name" placeholder="Your name">
        </div>
        <div class="input-ctn" data-validate="email is required">
            <label for="email">Email</label>
            <input v-model="email" type="text" id="email" placeholder="Your email">
        </div>
        <div class="input-ctn" data-validate="Name is required">
            <label for="name">Your Message</label>
            <textarea v-model="message" type="text" id="name" placeholder="Your message"></textarea>
        </div>
        <button class="btn btn-form">Send</button>
    </form>
</template>

<style scoped>
</style>