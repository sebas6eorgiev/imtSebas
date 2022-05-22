<template>
    <div class="w-100 h-75 d-flex flex-row justify-content-center align-items-center" style="background-color: transparent">
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column justify-content-center align-items-start">
                <h5 class="h5 title text-start">Email</h5>
                <h6 class="h6 text-start">sgeorgieva43@cepnet.net</h6>
                <h5 class="h5 mt-3 title text-start">Phone</h5>
                <h6 class="h6 text-start">608887277</h6>
            </div>
        </div>
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23962.266157288126!2d1.679359608951401!3d41.346196291369154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4798adfdbf557%3A0x136fbb2ddafe4438!2s08720%20Vilafranca%20del%20Pened%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1653138793628!5m2!1ses!2ses" 
                    class="locationImg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
    methods: {
        sendEmail() 
        {

        }
    },
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

    .input
    {
        /* background-color: whitesmoke; */
        border: 4px solid rgb(106,68,242);
        background-color: rgba(245, 245, 245, 0.526);
        outline: none;
    }

    .inputTextArea
    {
        height: 25%;
    }

    .btnSend
    {
        background-color: rgb(60,37,128);
        border: none;
        outline: none;
    }

    .btnSend:hover
    {
        background-color: rgb(60,37,128);
        transform: scale(0.95);
    }

    .locationImg
    {
        background-color: whitesmoke;
        border: 5px solid whitesmoke;
        border-radius: 50%;
        width: 50%;
        height: 70%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>