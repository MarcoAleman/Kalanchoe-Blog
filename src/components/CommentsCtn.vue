<script setup>
import { ref, computed } from 'vue';
import CommentItem from './CommentItem.vue';
import { comments } from '../stores/PostStore.js'

const commentsWithId = ref([])
const verMas = ref(false)
const textoP = ref('')
const props = defineProps({
    postId: '',
    typeOf: String,
})

const updateComments = computed(() => {
    commentsWithId.value = comments.value.filter(comment => comment.postId === props.postId)
    /* if (commentsWithId.value.length == 1) {
        textoP.value = `Ver comentario`
    } else {
        textoP.value = `Ver los ${commentsWithId.value.length} comentarios`
    } */
})

/* const verMasMenos = () => {
    verMas.value = !verMas.value
    if (verMas.value) {
        textoP.value = `Ocultar`
    } else {
        if (commentsWithId.value.length == 1) {
            textoP.value = `Ver comentario`
        } else {
            textoP.value = `Ver los ${commentsWithId.value.length} comentarios`
        }
    }
} */
</script>

<template>
    {{ updateComments }}
    <!-- <div v-if="commentsWithId.length" class="commentContainer">
        <p @click="verMasMenos" class="verMas">{{ textoP }}</p>
        <CommentItem v-if="verMas" v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />
    </div> -->
    <section class="comments p-2 mb-4 pb-5">
        <div class="divisor">
            <div class="count-comments">{{commentsWithId.length}} comments</div>
        </div>
        <CommentItem v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />
    </section>
</template>

<style scoped>
.comments {
    background-color: var(--color3);
    width: 100%;
}
.comments .divisor {
    border-bottom: 3px solid black;
    margin: 0 auto;
    width: 90%;
    font-size: 12px;
}
</style>