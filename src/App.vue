<template>
    <div id="app">
        <nav id="barraNavegadora" class="w-100 navbar navbar-expand-lg navbar-light d-flex
        justify-content-center align-items-center flex-row mt-3" style="background-color: transparent;">
            <div class="w-100 container-fluid d-flex justify-content-between align-items-between">
                <div>
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse position-absolute end-0" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item ms-2 me-2">
                            <router-link class="btnLink" to="/">Home</router-link> 
                        </li>
                        <li class="nav-item ms-2 me-2">
                            <router-link class="btnLink" to="/about">About</router-link>
                        </li>
                        <li class="nav-item ms-2 me-2">
                            <router-link class="btnLink" to="/skills">Skills</router-link> 
                        </li>
                        <li class="nav-item ms-2 me-2">
                            <router-link class="btnLink" to="/work">Work</router-link>
                        </li>
                        <li class="nav-item ms-2 me-5">
                            <router-link class="btnLink" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view/>        
    </div>
</template>

<style>
    #app {
        width: 85%;
        height: 85%;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.25);
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 20px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        /* background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 20px );
        -webkit-backdrop-filter: blur( 20px );
        border-radius: 10px; */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }

    nav a:hover {
        color: rgb(106,68,242);
    }

    nav a.router-link-exact-active {
        color: rgb(106,68,242);
        text-decoration-line: underline;
    }
</style>
