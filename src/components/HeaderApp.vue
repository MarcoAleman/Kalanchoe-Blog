<script setup>
import { RouterLink } from 'vue-router';
import { loginWithGoogle, logout } from '../firebase/auth';
import user from '../stores/User';

</script>

<template>
    <header class="d-flex justify-content-between align-items-center p-2 fixed-top shadow-s">
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <span><img src="../assets/img/menu.svg"/></span>
        </a>

        <RouterLink to="/"><img class="loguito" src="../assets/img/loguito.png" alt="Kalanchoe Kingdom"/></RouterLink>
        <RouterLink v-if="!user" to="/login">
            <img src="../assets/img/user.svg"/>
        </RouterLink>
        <img v-if="user" src="../assets/img/logout.svg" alt="" @click="logout">

        <div class="offcanvas offcanvas-start text-center" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <ul>
                        <li data-bs-dismiss="offcanvas">
                            <RouterLink to="/" class="dropdown-item text-center">Home</RouterLink>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <RouterLink to="/post" class="dropdown-item">New Posts</RouterLink>
                        </li>
                        <li class="d-none" data-bs-dismiss="offcanvas">
                            <RouterLink to="/post" class="dropdown-item">Posts Populares</RouterLink>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <RouterLink to="/about" class="dropdown-item">About Us</RouterLink>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <RouterLink to="/contact" class="dropdown-item">Contact Us</RouterLink>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <RouterLink to="/work" class="dropdown-item">Work with Us</RouterLink>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <RouterLink to="/profile" class="dropdown-item">My Profile</RouterLink>
                        </li>
                        <li class="d-none" data-bs-dismiss="offcanvas">
                            <RouterLink to="/fav" class="dropdown-item">Mis favoritos</RouterLink>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <RouterLink to="/rules" class="dropdown-item">Rules</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    height: 7vh;
    background-color: var(--color1);
    color: white;
}

header span {
    color: white;
}

header div {
    font-size: 1.4rem;
}

header img {
    width: 25px;
}

header img.loguito {
    width: 70px;
}
.offcanvas {
    background-color: var(--color4);
}

ul {
    list-style: none;
    padding: 0;
}

@media screen and (orientation:landscape) {
    header {
        height: 10vh;
    }
}
</style>