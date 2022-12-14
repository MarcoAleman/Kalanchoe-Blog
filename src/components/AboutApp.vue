<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <section class="ctn about p-2 text-center">
        <h3>About Me!</h3>
        <div class="profile img mb-2">
            <img src="../assets/img/io.jpeg" alt="">
        </div>
        <p>
            Hello, I am a programmer and lover of plants, who just wanted to create a space to share his passion:
            Kalanchoes.
            I want all of us who share the same passion to feel comfortable in this blog.
            If you have any advice, suggestion or feedback you can <RouterLink to="/contact">contact me.</RouterLink>
            All your comments will be welcome.
        </p>
    </section>
</template>

<style scoped>
.profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

a {
    color: blue;
}

/* @media screen and (orientation:landscape) {
    .profile img {
        width: 200px;
        height: 200px;
    }
} */
</style>