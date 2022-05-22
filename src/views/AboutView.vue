<template>
    <div class="w-100 h-75 d-flex flex-row justify-content-center align-items-center" style="background-color: transparent">
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <!-- <div class="w-75 h-100 d-flex flex-column justify-content-center align-items-start"> -->
                <video class="videoImg" style="outline: none; box-shadow: none">
                    <source src="../assets/sebasVideo.mp4" type="video/mp4">
                </video>
            <!-- </div> -->
        </div>
        <div class="w-50 h-100 d-flex flex-column justify-content-center align-items-start">
            <button class="btn btn-primary btnOption mb-3">My Life</button>
            <button class="btn btn-primary btnOption mb-3">Hard Skills</button>
            <button class="btn btn-primary btnOption mb-3">Soft Skills</button>
            <button class="btn btn-primary btnOption mb-3">Goals</button>
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
        background-image: url("../assets/sebasProfile.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .btnOption
    {
        color: white;
        background-color: rgb(60,37,128);
        outline: none;
        border: none;
        box-shadow: none;
    }

    .btnOption:hover
    {
        background-color: rgb(60,37,128);
        transform: scale(0.95);
        color: white;
        box-shadow: none;
    }

    .btnOption:active
    {
        background-color: rgb(60,37,128);
        transform: scale(0.95);
        color: white;
        box-shadow: none;
    }

    .btnOption:focus
    {
        background-color: rgb(60,37,128);
        transform: scale(0.95);
        color: white;
        box-shadow: none;
    }

    .videoImg
    {
        background-color: whitesmoke;
        border: 5px solid whitesmoke;
        border-radius: 50%;
        width: 65%;
        height: 90%;
    }
</style>