<script setup>
import { RouterLink } from 'vue-router';
import { loginWithGoogle } from '../firebase/auth';
</script>

<template>
    <section class="ctn about text-center py-3">
        <form @submit.prevent="">
            <h2>Login</h2>
            <div class="login-redes d-flex justify-content-evenly align-itmes-center my-4">
                <RouterLink to="/post">
                    <img src="../assets/img/google.svg" @click="loginWithGoogle" style="width: 35px;">
                </RouterLink>
                <a href="#">
                    <img src="../assets/img/face-logo.svg" alt="" srcset="" style="width: 35px;">
                </a>
            </div>
            <span class="my-2">Or</span>
            <div class="inputs">
                <div class="input-ctn" data-validate="email is required">
                    <label for="email">Email</label>
                    <input type="text" id="email" placeholder="Your email">
                </div>
                <div class="input-ctn " data-validate="Name is required">
                    <label for="name">Password</label>
                    <input type="password" id="name" placeholder="Your pass">
                </div>
                <button class="btn btn-form">Login</button>
            </div>
        </form>
    </section>
</template>

<style scoped>

</style>