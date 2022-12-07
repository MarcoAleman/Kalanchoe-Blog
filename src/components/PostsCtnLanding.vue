<template>
    <section class="posts-container text-center my-2">
        <div class="title-posts-container py-1">
            <h1 class="my-0">New Posts</h1>
        </div>
        <div v-for="i in 3" class="btm-posts-container py-1">
            <div class="post-preview d-flex row m-0">
                <div class="post-image d-flex align-items-center justify-content-center">
                    <img src="../assets/img/user.svg" alt="" srcset="">
                </div>
                <div class="desc-post">
                    <h3>Post title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi numquam alias quo
                        soluta atque.</p>
                </div>
            </div>
            <div class="btm-post d-flex row m-0">
                <div class="rate-post col-4 d-flex justify-content-evenly">
                    <img src="../assets/img/heart2.svg" alt="" srcset="">
                    <img src="../assets/img/comment.svg" alt="" srcset="">
                </div>
                <div class="autor col-8">
                    <span>Marco Antonio Aleman</span>
                    <img src="../assets/img/user.svg" alt="" srcset="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section.posts-container{
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 5px black;
}

section .title-posts-container {
    background-color: var(--color3);
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid black;
}

.btm-posts-container {
    border-bottom: 1px solid gray;
}

.post-preview .post-image {
    width: 30%;
}

.desc-post {
    width: 70%;
}

.rate-post img,
.autor img {
    width: 30px;
    padding-left: 5px;
}
</style>