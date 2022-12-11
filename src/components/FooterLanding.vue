<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <footer class="p-2">
        <div class="redes text-center">
            <h3>Follow Us!!!</h3>
            <div class="icons d-flex justify-content-evenly pt-2">
                <a href="https://www.linkedin.com/in/aleman-marco/" target="_blank">
                    <img src="../assets/img/face-logo.svg" alt="" srcset="" style="width: 35px;">
                </a>
                <a href="https://www.linkedin.com/in/aleman-marco/" target="_blank">
                        <img src="../assets/img/instagram-logo.svg" alt="" srcset="" style="width: 35px;">
                </a>
                <a href="https://www.linkedin.com/in/aleman-marco/" target="_blank">
                        <img src="../assets/img/twitter.svg" alt="" srcset="" style="width: 35px;">
                </a>
            </div>
        </div>
        <div class="links d-flex flex-column justify-content-center align-items-center">
            <hr class="border border-white border-2 opacity-50 w-75 rounded-pill">
            <div class="block d-flex flex-column justify-content-center align-items-center">
                <RouterLink to="/">Top Posts</RouterLink>
                <RouterLink to="/">Trending Posts</RouterLink>
                <RouterLink to="/">Top Users</RouterLink>
                <RouterLink to="/">Collections</RouterLink>
            </div>
            <hr class="border border-white border-2 opacity-50 w-75 rounded-pill">
            <div class="block d-flex flex-column justify-content-center align-items-center">
                <RouterLink to="/about">About Us</RouterLink>
                <RouterLink to="/contact">Contact Us</RouterLink>
                <RouterLink to="/terms">Terms and Conditions</RouterLink>
                <RouterLink to="/terms">Rules and Privacy</RouterLink>
            </div>
            <hr class="border border-white border-2 opacity-50 w-75 rounded-pill">
            <div class="copy text-center">
                <span>© Marco Antonio Aleman. All rights reserved.</span>
                <div class="personal-links d-flex justify-content-center align-items-center gap-3 mt-2">
                    <a href="https://www.linkedin.com/in/aleman-marco/" target="_blank">
                        <img src="../assets/img/linkedin.svg" alt="" srcset="" style="width: 25px;">
                    </a>
                    <a href="https://github.com/MarcoAleman" target="_blank">
                        <img src="../assets/img/github.svg" alt="" srcset="" style="width: 25px;">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--color2);
    border-radius: 10px 10px 0 0;
}


</style>