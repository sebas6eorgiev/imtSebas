<template>
    <div class="col w-100 h-100 d-flex justify-content-center align-items-center" style="background-color: transparent; border: none; outline: none;">
        <div class="card w-100 h-100 flip-card d-flex justify-content-center align-items-center" style="background-color: transparent; border: none; outline: none">
            <div class="w-100 card-body d-flex justify-content-between align-items-center flip-card-inner"> 
                <div class="flip-card-front" :style="{ backgroundImage: 'url(' + workToShow.img + ')' }"></div>
                <div class="flip-card-back d-flex flex-column justify-content-center align-items-center"> 
                    <h4 class="card-title fw-bold title">{{ workToShow.name }}</h4>
                    <div class="rounded w-75" style="background-color: rgb(174,156,226);">
                        <div class="rounded progressBar" :style="{ width: workToShow.percent }">{{ workToShow.percent }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            workToShow: {
                type: Object,
                required: true
            }
        },
        data() {
            return {

            }
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

    .workImage
    {
        background-position: center;
        background-attachment: fixed;
        background-size: cv;
        background-repeat: no-repeat;
    }

    .flip-card-inner 
    {
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner   
    {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back 
    {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front 
    {
        width: 200px;
        height: 200px;
        background-color: rgba(245, 245, 245, 0.526);
        border: 5px solid whitesmoke;
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .flip-card-back 
    {
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: whitesmoke;
        border: 5px solid whitesmoke;
        /* border: 4px solid rgb(106,68,242); */
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transform: rotateY(180deg);
        box-shadow: none;
        user-select: none;
    }

    .progressBar
    {
        color: white;
        /* height: 10px;  */
        background-color: rgb(106,68,242);
    }
</style>