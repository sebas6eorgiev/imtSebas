<template>
    <div class="w-100 h-75 d-flex flex-row justify-content-center align-items-center" style="background-color: transparent">
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column justify-content-center align-items-start">
                <h6 class="h6 ms-5 subtitle text-start">Hey! I am</h6>
                <h1 class="h1 ms-5 title fw-bolder text-start">Sebastiano Georgiev</h1>
                <h4 class="h4 ms-5 subtitle text-start">Frontend Web Developer In Process</h4>
            </div>
        </div>
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <div class="profileImg"></div>
        </div>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    }
}
</script>

<style>
    .title
    {
        font-family: 'Norwester', sans-serif;
    }

    .subtitle
    {
        font-family: 'Kollektif', sans-serif;
    }

    .profileImg
    {
        background-color: whitesmoke;
        border: 5px solid whitesmoke;
        border-radius: 50%;
        width: 50%;
        height: 70%;
        background-image: url("../assets/sebas2.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>