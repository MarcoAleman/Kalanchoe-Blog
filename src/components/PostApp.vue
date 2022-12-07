<script setup>
</script>

<template>
    <section class="post text-center py-3">
        <h1>Title post</h1>
        <div class="img-post p-2">
            <img src="../assets/img/img1.jpg" alt="">
            <span class="d-none">Photo of kalanchoes</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam ullam ex at assumenda accusantium
            atque vero tempora! Eveniet fugit recusandae officiis perspiciatis. Fugit, corrupti culpa. Velit illum
            eligendi earum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio sit ullam neque commodi nesciunt,
            veritatis illo, laboriosam suscipit officia fugiat repudiandae ex odio soluta id reiciendis fugit dolorum
            ipsam.
        </p>
        <div class="btm-post d-flex row m-0 mt-3">
            <div class="rate-post col-4 d-flex justify-content-evenly">
                <img src="../assets/img/heart2.svg" alt="" srcset="">
                <img src="../assets/img/comment.svg" alt="" srcset="">
            </div>
            <div class="autor col-8">
                <span>Marco Antonio Aleman</span>
                <img src="../assets/img/user.svg" alt="" srcset="">
            </div>
        </div>
    </section>
    <section class="comments p-2">
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
    </section>
</template>

<style scoped>
.post,
.comments {
    background-color: var(--color3);
}

.img-post {}

.img-post img {
    width: 90%;
}

.post p {
    width: 80%;
    margin: 0 auto;
    text-align: start;
}

.comments {}

.comments .divisor {
    border-bottom: 3px solid black;
    margin: 0 auto;
    width: 90%;
    font-size: 12px;
}

.comments .comment {
    border-bottom: 1px solid gray;
}
</style>