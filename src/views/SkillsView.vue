<template>
    <div class="w-100 h-75 d-flex flex-row">
        <div class="w-25 d-flex justify-content-start align-items-center ps-5">
            <div class="d-flex justify-content-center align-items-center">
                <paginate-links for="skillsList" :async="true" :hide-single-page="true"
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

        <paginate name="skillsList" :list="skills" :per="3" ref="paginator" tag="div" class="w-50 h-100">
            <div class="w-100 h-100 d-flex flex-row justify-content-center align-items-center" style="background-color: transparent; border: none; outline: none;">
                <div class="w-100 h-100" v-for="skillToPas in paginated('skillsList')" :key="skillToPas.name">
                    <skill-component :skillToShow="skillToPas"></skill-component>
                </div>
            </div>
        </paginate> 

        <div class="w-25 d-flex justify-content-end align-items-center pe-5">
            <div class="d-flex justify-content-center align-items-center">
                <paginate-links for="skillsList" :async="true" :hide-single-page="true"
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
                skills: [
                    {
                        name: "Java", 
                        img: require("../assets/ImagesSills/javaLogo.png"),
                        percent: "60%"
                    },
                    {
                        name: "C#", 
                        img: require("../assets/ImagesSills/cSharpLogo.png"),
                        percent: "50%"
                    },
                    {
                        name: "C++", 
                        img: require("../assets/ImagesSills/cPlusPlusLogo.png"),
                        percent: "50%"
                    },
                    {
                        name: "Android Studio", 
                        img: require("../assets/ImagesSills/androidStudioLogo.png"),
                        percent: "60%"
                    },
                    {
                        name: "MySql", 
                        img: require("../assets/ImagesSills/mySqlLogo.png"),
                        percent: "75%"
                    },
                    {
                        name: "Linux - Ubuntu", 
                        img: require("../assets/ImagesSills/linuxLogo.png"),
                        percent: "60%"
                    },
                    {
                        name: "HTML", 
                        img: require("../assets/ImagesSills/htmlLogo.png"),
                        percent: "75%"
                    },
                    {
                        name: "CSS", 
                        img: require("../assets/ImagesSills/cssLogo.png"),
                        percent: "65%"
                    },
                    {
                        name: "Bootstrap", 
                        img: require("../assets/ImagesSills/bootstrapLogo.png"),
                        percent: "65%"
                    },
                    {
                        name: "Sass", 
                        img: require("../assets/ImagesSills/sassLogo.png"),
                        percent: "40%"
                    },
                    {
                        name: "Javascript", 
                        img: require("../assets/ImagesSills/javaScriptLogo.png"),
                        percent: "75%"
                    },
                    {
                        name: "ReactJS", 
                        img: require("../assets/ImagesSills/reactLogo.png"),
                        percent: "40%"
                    },
                    {
                        name: "VueJS", 
                        img: require("../assets/ImagesSills/vueLogo.png"),
                        percent: "70%"
                    },
                    {
                        name: "PHP", 
                        img: require("../assets/ImagesSills/phpLogo.png"),
                        percent: "70%"
                    },
                    {
                        name: "Laravel", 
                        img: require("../assets/ImagesSills/laravelLogo.png"),
                        percent: "60%"
                    },
                    {
                        name: "GitHub", 
                        img: require("../assets/ImagesSills/githubLogo.png"),
                        percent: "60%"
                    },
                    {
                        name: "Heroku", 
                        img: require("../assets/ImagesSills/herokuLogo.png"),
                        percent: "50%"
                    },
                    {
                        name: "WordPress", 
                        img: require("../assets/ImagesSills/wordpressLogo.png"),
                        percent: "50%"
                    }
                ],
                skill: {
                    name: "",
                    img: ""
                },
                paginate: ['skillsList']
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

    ul.paginate-links.skillsList
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