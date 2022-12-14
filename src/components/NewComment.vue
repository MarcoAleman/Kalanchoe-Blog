<script setup>
import user from '../stores/User.js';
import { addComment } from '../firebase/comments.js';
import { ref } from 'vue';

const texto = ref('');
const props = defineProps({
    postId: '',
    typeOf: String
})

const addNewComment = () => {
    let newComment = {
        id: crypto.randomUUID(),
        postId: props.postId,
        date: Date.now(),
        name: user.value.displayName,
        email: user.value.email,
        text: texto.value,
        photo: user.value.photoURL,
    }
    addComment(newComment)
    texto.value = ''
}
</script>

<template>
    <!-- <form @submit.prevent="addNewComment">
        <input maxlength="80" required v-model="texto" type="text"
            :placeholder="'comentar como ' + user.displayName.split(' ')[0]">
        <button>Enviar</button>
    </form> -->
    <form @submit.prevent="addNewComment" class="add-comment d-flex flex-column align-items-center justify-content-center gap-2">
        <label for="add">Add comment</label>
        <textarea v-model='texto' name="add" id="add" maxlength="80" class="p-1"></textarea>
        <button class="btn btn-form">Publish</button>
    </form>
</template>

<style scoped>
@media screen and (orientation:landscape) {
    textarea {
        width: 79%;
    }
}
</style>