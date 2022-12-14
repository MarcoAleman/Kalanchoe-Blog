<script setup>
import Banner from './BannerLandingApp.vue';
import PostsCtn from './PostsCtnLanding.vue';
import Footer from './FooterLanding.vue';
</script>

<template>
    <Banner />
    <div class="p-1">
        <PostsCtn />

        <div class="categories d-flex flex-column gap-3 my-4">
            <div class="category d-flex justify-content-center align-items-center text-uppercase">varieties</div>
            <div class="category d-flex justify-content-center align-items-center text-uppercase">collections</div>
            <div class="category d-flex justify-content-center align-items-center text-uppercase">community</div>
        </div>

        <section class="ctn about my-3 p-2 text-center">
            <div class="profile img mb-2">
                <img class="rounded" src="../assets/img/slider-2.jpg" alt="kalanchoe image">
            </div>
            <p>All about the plants we love. The Kalanchoes.
                Varieties, care, substrate, nutrients, etc.
                A community to talk about the love of our plants.
                Everything and much more in this blog.</p>
        </section>

    </div>
    <Footer />
</template>

<style scoped>
.categories .category {
    color: aliceblue;
    height: 3rem;
    background-color: var(--color2);
    border-radius: 12px;
    font-size: 1.5rem;
}

.about img {
    width: 100%;
}

.about p {
    font-size: 1.3rem;
}
</style>