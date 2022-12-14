<script setup>
import { ref } from 'vue';
import user from '../stores/User'
import NewComment from './NewComment.vue';
import CommentsCtn from './CommentsCtn.vue';

const props = defineProps ({
    post : {},
    typeof: Object
})

</script>

<template>
    <section class="post text-center py-3">
        <h1>{{ post.name }}</h1>
        <div class="img-post p-2">
            <img :src="post.photo ? post.photo : '../src/assets/img/img1.jpg'" alt="">
            <span class="d-none">Photo of kalanchoes</span>
        </div>
        <p>{{post.body}}
        </p>
        <div class="btm-post d-flex row m-0 mt-3 mb-3">
            <div class="rate-post col-4 d-flex justify-content-evenly">
                <img src="../assets/img/heart2.svg" alt="" srcset="">
                <img src="../assets/img/comment.svg" alt="" srcset="">
            </div>
            <div class="autor col-8">
                <span>{{ post.author }}</span>
                <img src="../assets/img/user.svg" alt="" srcset="">
            </div>
        </div>
        <NewComment v-if="user" :postId="post.id" />
    </section>
    <!-- <section class="comments p-2 mb-4">
        <div class="divisor">
            <div class="count-comments">3 comments</div>
        </div>
        <div v-for="comment in 3" class="comment d-flex row m-0">
            <div class="post-image d-flex align-items-center justify-content-center w-25">
                <img src="../assets/img/user.svg" alt="" srcset="" style="height: 50px;">
            </div>
            <div class="desc-post w-75">
                <h5>Nickname</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi numquam alias quo
                    soluta atque.
                </p>
            </div>
        </div>
    </section> -->
    <CommentsCtn :postId="post.id" />
</template>

<style scoped>
.post,
.comments {
    background-color: var(--color3);
}


.img-post img {
    width: 90%;
}

.post p {
    width: 80%;
    margin: 0 auto;
    text-align: start;
}

</style>