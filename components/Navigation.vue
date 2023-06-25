<template>
<!-- Navbar -->        
        <!-- <nav class="navbar navbar-expand-lg transparent navbar-inverse navbar-fixed-top fixed-top"> -->
    <div>    
        <nav id="nav-top" class="navbar navbar-expand-lg bg-light navbar-static-top" role="navigation">
            <!-- Container wrapper -->
            <div class="container">
                <!-- Navbar brand -->
                <a class="navbar-brand-lg ml-10 mr-30 d-none d-md-block" href="/">
                <img
                    src="@/static/images/transpha.png"
                    height="2"
                    alt="MDB Logo"
                    loading="lazy"
                />

                </a>
                <a class="navbar-brand navbar-brand-sm d-md-none" href="/">
                <img
                    src="@/static/images/transpha.png"
                    height="5"
                    alt="MDB Logo"
                    loading="lazy"
                    style="margin-top: -1px;"
                />
                </a>
                
                <button class="navbar-toggler first-button" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <div class="animated-icon1">
                        <span class="animated-icon-span" style="width: 120%;"></span>
                        <span class="animated-icon-span" style="width: 110%;"></span>
                        <span class="animated-icon-span"></span>
                    </div>
                </button>

                <!-- Collapsible wrapper -->
                <div id=""
                    class="collapse navbar-collapse justify-content-center ml-60">
                    <!-- Left links -->
                    <ul class="navbar-nav mb-lg-0">
                        <li class="nav-item mx-6 my-auto">
                            <nuxt-link to="/" class="font-medium">Home</nuxt-link>
                            <!-- <a href="/" class="font-medium lg-link active">Home</a> -->
                        </li>                        
                        <li class="nav-item mx-6 my-auto">
                            <nuxt-link to="/#about-us" class="font-medium">About Us</nuxt-link>
                            <!-- <a href="#about-us" class="font-medium lg-link">About Us</a> -->
                        </li>
                        <li class="nav-item mx-6 my-auto">
                            <nuxt-link to="/#products" class="font-medium">Products</nuxt-link>
                            <!-- <a href="#products" class="font-medium lg-link">Products</a> -->
                        </li>
                        <li class="nav-item mx-6 my-auto">
                            <a href="/#contact-us" class="font-medium text-white"><button class="btn base-green btn-rounded px-8 py-2 text-capitalize text-white">Contact Us</button></a>
                        </li>
                        
                    </ul>
                </div>

                <!-- Collapsible wrapper -->
            </div>
            <!-- Container wrapper -->

        </nav>

        <div id="menu" class="invisible content-center my-auto mx-auto align-middle text-center mt-60">
            <p class="mt-10 menu-item-1">
                <nuxt-link to="/" class="font-medium text-dark">Home</nuxt-link>
                <!-- <a href="/" class="menu-item font-medium">Home</a> -->
            </p>
            <p class="mt-10 menu-item-2">
                <nuxt-link to="/#about-us" class="font-medium text-dark">About Us</nuxt-link>
                <!-- <a href="#about-us" class="menu-item font-medium">About Us</a> -->
            </p>
            <p class="mt-10 menu-item-3">
                <nuxt-link to="/#products" class="font-medium text-dark">Products</nuxt-link>
                <!-- <a href="#products" class="menu-item font-medium">Products</a> -->
            </p>
            <p class="mt-10 menu-item-4">
                <button class="btn base-green btn-rounded px-8 py-2 text-capitalize"><a href="/#contact-us" class="font-medium text-white">Contact Us</a></button>
            </p>
        </div>

    </div>
        <!-- Navbar -->
</template>

<script>
    export default {
        data() {
            return {
                title: 'Welcome to Transpha!'
            }
        },
        
        mounted() {
            window.addEventListener("DOMContentLoaded", (event) => {
                document.querySelector('.first-button').addEventListener('click', function () {
                    document.querySelector('.animated-icon1').classList.toggle('open');
                })
            });

            window.addEventListener("DOMContentLoaded", (event) => {
                document.querySelector('.first-button').addEventListener('click', function () {
                    document.querySelector('#menu').classList.toggle('invisible');
                    document.querySelector('#nav-top').classList.toggle('fixed-top');
                })
            });
            
            // handles all links in mobile menu manually.
            window.addEventListener("DOMContentLoaded", (event) => {
                document.querySelector('.menu-item-1').addEventListener('click', function(){
                    document.querySelector('.animated-icon1').classList.toggle('open');
                    document.querySelector('#menu').classList.toggle('invisible');
                    document.querySelector('#nav-top').classList.toggle('fixed-top');
                })
            });
            window.addEventListener("DOMContentLoaded", (event) => {
                document.querySelector('.menu-item-2').addEventListener('click', function(){
                    document.querySelector('.animated-icon1').classList.toggle('open');
                    document.querySelector('#menu').classList.toggle('invisible');
                    document.querySelector('#nav-top').classList.toggle('fixed-top');
                })
            });
            window.addEventListener("DOMContentLoaded", (event) => {
                document.querySelector('.menu-item-3').addEventListener('click', function(){
                    document.querySelector('.animated-icon1').classList.toggle('open');
                    document.querySelector('#menu').classList.toggle('invisible');
                    document.querySelector('#nav-top').classList.toggle('fixed-top');
                })
            });
            window.addEventListener("DOMContentLoaded", (event) => {
                document.querySelector('.menu-item-4').addEventListener('click', function(){
                    document.querySelector('.animated-icon1').classList.toggle('open');
                    document.querySelector('#menu').classList.toggle('invisible');
                    document.querySelector('#nav-top').classList.toggle('fixed-top');
                })
            });
            
        }
    }

</script>

<style scoped>

     .base-green {
        background-color: #5CAE69;
    }

    .color-green {
        color: #5CAE69;
    }

    .navbar-brand-lg {
        width: 8%;
        height: 8%;
        position: relative;
        /* left: 50%;
        margin-left: -100px !important;   50% of your logo width */
        /* pointer-events: none; */
    /* display: block; */
    }

     .navbar-brand-sm {
        width: 20%;
        height: 20%;
        pointer-events: none;
    /* display: block; */
    }

    /* .navbar.transparent.navbar-inverse .navbar-inner { */
        /* background: rgba(0,0,0,0.4); */
        /* box-shadow: none; */
    /* } */

    .nuxt-link {
        font-family: 'Montserrat';
    }

    .nuxt-link:hover {
        color: #5CAE69;
    }

    .nuxt-link-active {
        color: #5CAE69;
    }

    img {
        pointer-events: none;
    }

    /* Icon 1 */

    .animated-icon1 {
        width: 30px;
        height: 20px;
        position: relative;
        margin: 0px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    .animated-icon1 span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .animated-icon1 span {
        background: #181818;
    }

    .animated-icon1 span:nth-child(1) {
        top: 0px;
    }

    .animated-icon1 span:nth-child(2) {
        top: 10px;
    }

    .animated-icon1 span:nth-child(3) {
        top: 20px;
    }

    .animated-icon1.open span:nth-child(1) {
        top: 11px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }

    .animated-icon1.open span:nth-child(2) {
        opacity: 0;
        left: -60px;
    }

    .animated-icon1.open span:nth-child(3) {
        top: 11px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    #menu {
        min-height: 100%;
        min-width: 100%;
        background: white;
        z-index: 1000;
        position: fixed;
        align-content: center;
        /* top: 0%;
        left: 0%; */
    }

</style>
