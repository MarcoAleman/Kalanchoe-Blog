<template>
    <main class="p-1">
        <section class="posts-container text-center my-2">
            <div class="title-posts-container py-1">
                <h1 class="my-0">Ultimos Post</h1>
            </div>
            <div v-for="i in 3" class="btm-posts-container py-1">
                <div class="post-preview d-flex row m-0">
                    <div class="post-image d-flex align-items-center justify-content-center">
                        <img src="../assets/img/user.svg" alt="" srcset="">
                    </div>
                    <div class="desc-post">
                        <h3>Post title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi numquam alias quo
                            soluta atque.</p>
                    </div>
                </div>
                <div class="btm-post d-flex row m-0">
                    <div class="rate-post col-4 d-flex justify-content-evenly">
                        <img src="../assets/img/heart2.svg" alt="" srcset="">
                        <img src="../assets/img/comment.svg" alt="" srcset="">
                    </div>
                    <div class="autor col-8">
                        <span>Marco Antonio Aleman</span>
                        <img src="../assets/img/user.svg" alt="" srcset="">
                    </div>

                </div>
            </div>
        </section>

        <section class="posts-container text-center my-2">
            <div class="title-posts-container py-1">
                <h1 class="my-0">Trending</h1>
            </div>
            <div v-for="i in 3" class="btm-posts-container py-1">
                <div class="post-preview d-flex row m-0">
                    <div class="post-image d-flex align-items-center justify-content-center">
                        <img src="../assets/img/user.svg" alt="" srcset="">
                    </div>
                    <div class="desc-post">
                        <h3>Post title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi numquam alias quo
                            soluta atque.</p>
                    </div>
                </div>
                <div class="btm-post d-flex row m-0">
                    <div class="rate-post col-4 d-flex justify-content-evenly">
                        <img src="../assets/img/heart2.svg" alt="" srcset="">
                        <img src="../assets/img/comment.svg" alt="" srcset="">
                    </div>
                    <div class="autor col-8">
                        <span>Marco Antonio Aleman</span>
                        <img src="../assets/img/user.svg" alt="" srcset="">
                    </div>

                </div>
            </div>
        </section>

        <div class="categories d-flex flex-column gap-3">
            <div class="category d-flex justify-content-center align-items-center">Variedades</div>
            <div class="category d-flex justify-content-center align-items-center">Cuidados</div>
            <div class="category d-flex justify-content-center align-items-center">Colecciones</div>
        </div>

        <section class="ctn about mt-3 p-2 text-center">
            <div class="profile img mb-2">
                <img src="../assets/img/user.svg" alt="" srcset="">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit dolorum quo eligendi minima
                corrupti eaque suscipit eum et quae sed magnam neque unde consectetur quidem, sit quod dolor non?</p>
        </section>

        <form action="#" class="ctn contact mt-2 p-2 py-3 d-flex flex-column text-center">
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

    </main>
</template>

<style scoped>
section.posts-container{
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 5px black;
}

section .title-posts-container {
    background-color: var(--color3);
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid black;
}

.btm-posts-container {
    border-bottom: 1px solid gray;
}

.post-preview .post-image {
    width: 30%;
}

.desc-post {
    width: 70%;
}

.rate-post img,
.autor img {
    width: 30px;
    padding-left: 5px;
}

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