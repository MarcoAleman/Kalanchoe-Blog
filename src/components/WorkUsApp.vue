<script setup>
</script>

<template>
    <form action="#" class="ctn contact mt-5 p-2 py-3 d-flex flex-column text-center">
        <h2>Work with Us!</h2>
        <div class="input-ctn" data-validate="email is required">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Your email">
        </div>
        <div class="input-ctn " data-validate="Name is required">
            <label for="name">Linkedin</label>
            <input type="text" id="name" placeholder="Your profile">
        </div>
        <div class="input-ctn" data-validate="Name is required">
            <label for="name">Your Message</label>
            <textarea type="text" id="name" placeholder="Your message"></textarea>
        </div>
        <button class="btn btn-form">Send</button>
    </form>
</template>

<style scoped>

</style>