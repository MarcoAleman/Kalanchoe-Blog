<script setup>
import Banner from './BannerLandingApp.vue';
import PostsCtn from './PostsCtnLanding.vue';
import Footer from './FooterLanding.vue';
</script>

<template>
    <Banner />
    <div class="p-1">
        <PostsCtn />
        <PostsCtn />

        <div class="categories d-flex flex-column gap-3 my-4">
            <div class="category d-flex justify-content-center align-items-center">Variedades</div>
            <div class="category d-flex justify-content-center align-items-center">Cuidados</div>
            <div class="category d-flex justify-content-center align-items-center">Colecciones</div>
        </div>

        <section class="ctn about my-3 p-2 text-center">
            <div class="profile img mb-2">
                <img src="../assets/img/user.svg" alt="" srcset="">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit dolorum quo eligendi minima
                corrupti eaque suscipit eum et quae sed magnam neque unde consectetur quidem, sit quod dolor non?</p>
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
}

.about img {
    width: 30%;
}

</style>