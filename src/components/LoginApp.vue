<script setup>
</script>

<template>
    <section class="ctn about text-center mt-5 py-3">
        <form action="#">
            <h2>Login</h2>
            <div class="login-redes d-flex justify-content-evenly align-itmes-center my-4">
                <a href="https://www.linkedin.com/in/aleman-marco/" target="_blank">
                    <img src="../assets/img/face-logo.svg" alt="" srcset="" style="width: 35px;">
                </a>
                <a href="https://www.linkedin.com/in/aleman-marco/" target="_blank">
                    <img src="../assets/img/google.svg" alt="" srcset="" style="width: 35px;">
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
                <button class="btn btn-form">Send</button>
            </div>
        </form>
    </section>
</template>

<style scoped>

</style>