<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="nav-bottom fixed-bottom rounded-top">
        <div class="d-flex justify-content-around align-items-center gap-3 mt-2">
            <RouterLink to="/">
                <img src="../assets/img/home.svg" alt="" srcset="" style="width: 25px;">
            </RouterLink>
            <RouterLink to="/create" class="btn-1">
                <img src="../assets/img/write.svg" alt="" srcset="" style="width: 30px;">
            </RouterLink>
            <RouterLink to="/profile">
                <img src="../assets/img/user-gardener.svg" alt="" srcset="" style="width: 25px;">
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.nav-bottom {
    height: 7vh;
    background-color: var(--color1);
}

.btn-1 {
    padding: 0.6rem;
    background-color: white;
    border-radius: 50%;
    margin-top: -1.2rem;
    box-shadow: 0 0 5px black;
}

.btn-1 img {
    margin-left: 2px;
}

@media screen and (orientation:landscape) {
    .nav-bottom {
        height: fit-content;
    }
}
</style>