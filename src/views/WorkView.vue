<template>
    <div class="w-100 h-75 d-flex flex-row">
        <div class="w-25 d-flex justify-content-start align-items-center ps-5">
            <div class="d-flex justify-content-center align-items-center">
                <paginate-links for="worksList" :async="true" :hide-single-page="true"
                :simple="{
                    next: 'Next',
                    prev: 'Back'
                }"
                :classes="{
                    '.next' : 'btnDisabled',
                    '.prev' : 'btn'
                }"></paginate-links>
            </div>
        </div>

        <paginate name="worksList" :list="works" :per="3" ref="paginator" tag="div" class="w-50 h-100 col-10">
            <div class="w-100 h-100 d-flex flex-row justify-content-center align-items-center" style="background-color: transparent; border: none; outline: none;">
                <div v-for="workToPas in paginated('worksList')" :key="workToPas.name">
                    <work-component :workToShow="workToPas"></work-component>
                </div>
            </div>
        </paginate> 

        <div class="w-25 d-flex justify-content-end align-items-center col-3 pe-5">
            <div class="d-flex justify-content-center align-items-center">
                <paginate-links for="worksList" :async="true" :hide-single-page="true"
                :simple="{
                    next: 'Next',
                    prev: 'Back'
                }"
                :classes="{
                    '.next' : 'btn',
                    '.prev' : 'btnDisabled'
                }"></paginate-links>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                works: [
                    {
                        name: "Football Shop", 
                        img: ""
                    },
                    {
                        name: "Emergency Calls App", 
                        img: ""
                    },
                    {
                        name: "Patronus Game", 
                        img: ""
                    },
                    {
                        name: "Pokedex App", 
                        img: ""
                    },
                    {
                        name: "Cars Shop App", 
                        img: ""
                    },
                    {
                        name: "Disney Api App", 
                        img: ""
                    },
                    {
                        name: "Location App", 
                        img: ""
                    },
                    {
                        name: "Charts App", 
                        img: ""
                    },
                    {
                        name: "Multimedia App", 
                        img: ""
                    },
                    {
                        name: "Missile Game", 
                        img: ""
                    },
                    {
                        name: "3D Cars Game", 
                        img: ""
                    }
                ],
                work: {
                    name: "",
                    img: ""
                },
                paginate: ['worksList']
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

    .btnDisabled
    {
        display: none;
    }

    ul.paginate-links.worksList
    {
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    ul.paginate-links
    {
        list-style-type: none;
    }

    .prev
    {
        color: white;
        background-color: rgb(60,37,128);
        outline: none;
        border: none;
        margin-right: 10px;
    }

    .prev:hover
    {
        background-color: rgb(60,37,128);
        transform: scale(0.95);
        color: white;
    }

    .next
    {
        color: white;
        background-color: rgb(60,37,128);
        outline: none;
        border: none;
    }

    .next:hover
    {
        background-color: rgb(60,37,128);
        transform: scale(0.95);
        color: white;
    }
</style>