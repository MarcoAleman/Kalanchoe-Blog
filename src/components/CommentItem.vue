<script setup>
const props = defineProps({
    comment: {},
    typeof: Object,
})
</script>

<template>
    <!-- <div class="card">
        <div class="cardHeader">
            <h3>{{ comment.name }}</h3>
            <img :src="comment.photo" alt="foto perfil">
        </div>
        <div class="cardContent">
            <p>📨 {{ comment.text }}</p>
        </div>
    </div> -->
    <div class="comment d-flex row m-0">
            <div class="post-image d-flex align-items-center justify-content-center w-25">
                <img :src="comment.photo" alt="Profile image" style="height: 50px;">
            </div>
            <div class="desc-post w-75">
                <h5>{{ comment.name }}</h5>
                <p>{{ comment.text }}</p>
            </div>
        </div>
</template>

<style scoped>
.comment {
    border-bottom: 1px solid gray;
}
</style>