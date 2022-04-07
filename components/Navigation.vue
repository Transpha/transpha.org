<template>
<!-- Navbar -->        
    <!-- <nav class="navbar navbar-expand-lg transparent navbar-inverse navbar-fixed-top fixed-top"> -->
    <nav class="navbar navbar-expand-lg transparent navbar-inverse">
        <!-- Container wrapper -->
        <div class="container">
            <!-- Navbar brand -->
            <a class="navbar-brand-lg ml-40 d-none d-md-block">
            <img
                src="@/static/images/transpha_logo.png"
                height="2"
                alt="MDB Logo"
                loading="lazy"
            />

            </a>
             <a class="navbar-brand navbar-brand-sm d-md-none">
            <img
                src="@/static/images/transpha_logo.png"
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
                    <span class="bg-dark animated-icon-span"></span>
                    <span class="bg-dark animated-icon-span"></span>
                    <span class="bg-dark animated-icon-span"></span>
                </div>
            </button>

            <!-- Collapsible wrapper -->
            <div id="navbarButtonsExample"
                class="collapse navbar-collapse justify-content-center ml-60">
                <!-- Left links -->
                <ul class="navbar-nav mb-lg-0">
                    <li class="nav-item mx-6 my-auto">
                        <nuxt-link to="/" class="font-medium">Home</nuxt-link>
                    </li>
                    <li class="nav-item mx-6 my-auto">
                        <nuxt-link to="#about" class="font-medium">About Us</nuxt-link>
                    </li>
                    <li class="nav-item mx-6 my-auto">
                        <nuxt-link to="#products" class="font-medium">Products</nuxt-link>
                    </li>
                    <li class="nav-item mx-6 my-auto">
                        <button class="btn base-green btn-rounded px-8 py-2 text-capitalize"><nuxt-link to="#contactus" class="font-medium text-white">Contact Us</nuxt-link></button>
                    </li>
                    
                </ul>
            </div>

            <!-- Collapsible wrapper -->
        </div>
        <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</template>

<script>
    export default {
        data() {
            return {
                title: 'Welcome to BLAST!'
            }
        },
        mounted() {
            document.querySelector('.first-button').addEventListener('click', function () {

            document.querySelector('.animated-icon1').classList.toggle('open');
            });
        }
    }

</script>

<style scoped>

     .base-green {
        background-color: #5CAE69;
    }

    .navbar-brand-lg {
        width: 8%;
        height: 8%;
        position: relative;
        /* left: 50%;
        margin-left: -100px !important;   50% of your logo width */
        pointer-events: none;
    /* display: block; */
    }

     .navbar-brand-sm {
        width: 20%;
        height: 20%;
        pointer-events: none;
    /* display: block; */
    }

    .navbar.transparent.navbar-inverse .navbar-inner {
        background: rgba(0,0,0,0.4);
        box-shadow: none;
    }

    .nuxt-link {
        font-family: 'Montserrat';
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
    background: #2d7ef7;
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

</style>
