<script setup>
import user from '../stores/User';
</script>

<template>
    <form action="#" class="profile ctn mt-5 mb-3 p-2 text-center">
        <div class="img-profile">
            <img :src="user ? user.photoURL : 'https://picsum.photos/200'" alt="user photo" />
        </div>
        <h3>{{user ? user.displayName : 'Kalanchoe'}}</h3>
        <div class="input-ctn" data-validate="email is required">
            <label for="email">Email</label>
            <input type="text" id="email" :value="user ? user.email : 'email@email.com'" disabled>
        </div>
        <div class="input-ctn profile-desc" data-validate="Name is required">
            <label for="name">Description</label>
            <textarea class="pt-0" type="text" id="name" disabled>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor laborum ipsum nesciunt delectus ullam, illo minima nulla odio. In ab similique rem ipsa sit quae. Ut culpa amet ratione? Dignissimos?
            </textarea>
        </div>
        <button class="btn btn-form d-none" disabled>Edit Profile</button>
    </form>
</template>

<style scoped>
form.ctn {
    margin-top: -0.2rem;
    z-index: 222;
    position: relative;
}
.img-profile{
    border-radius: 50%;
}
.img-profile img {
    margin: auto;
    border-radius: 50%;
    width: 50%;
}

@media screen and (orientation:landscape) {
    .img-profile img {
        width: 30%;
    }
}
</style>