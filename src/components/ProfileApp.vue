<script setup>
</script>

<template>
    <!-- <div class="banner-profile d-flex justify-content-center align-items-center">
        <div class="img-profile w-25">
            <img src="../assets/img/user.svg" alt="" srcset="">
        </div>
        <div class="name-profile w-75">
            <h1>Kalanchoe</h1>
        </div>
    </div> -->
    <form action="#" class="profile ctn mt-5 p-2 text-center">
        <div class="img-profile">
            <img src="../assets/img/user.svg" alt="" srcset="">
        </div>
        <h3>Kalanchoe</h3>
        <div class="input-ctn" data-validate="email is required">
            <label for="email">Email</label>
            <input type="text" id="email" value="email@email.com" disabled>
        </div>
        <div class="input-ctn" data-validate="Name is required">
            <label for="name">Description</label>
            <textarea type="text" id="name" disabled>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor laborum ipsum nesciunt delectus ullam, illo minima nulla odio. In ab similique rem ipsa sit quae. Ut culpa amet ratione? Dignissimos?
            </textarea>
        </div>
        <button class="btn btn-form" disabled>Edit Profile</button>
    </form>
</template>

<style scoped>
form.ctn {
    margin-top: -0.2rem;
    z-index: 222;
    position: relative;
}

.banner-profile {
    background-color: rgb(29, 112, 172);
    height: 5rem;
    width: 90%;
    margin: 0 auto;
}


.img-profile img {
    margin: auto;
    width: 50%;
}
</style>