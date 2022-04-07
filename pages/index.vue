<template>
    <v-app class="app">
        <div id="navigation-bar">
            <Navigation />
        </div>
        <div class="body m-5">
            <div id="intro">
                <div class="row mx-20 mt-20">
                    <div class="col-md-5 col-xl-5 mx-auto my-auto mb-20">
                        <h4 class="text-8xl font-bold gb">Be <span class="color-green text-decoration-none"> seamless.</span></h4>
                        <br />
                        <p class="mt-3 text-xl font-light">
                            Transpha is an organization dedicated to providing 
                        </p>
                        <p class="mt-1 text-xl font-light">
                            solutions for making interactions between devices 
                        </p>
                            <p class="mt-1 text-xl font-light">
                            smooth and uninterrupted.
                        </p>
                        <br />
                        <p class="mt-3">
                            <button class="btn bg-custom-green btn-rounded text-white px-8 py-3 text-capitalize text-sm">Check Out Products</button>
                        </p>
                    </div>
                    <div class="col-md-1 col-xl-1">

                    </div>
                    <div class="col-md-6 col-xl-6 mx-auto mb-10">
                        <div class="bg-img-main">
                            <img class="mx-auto" src="@/static/images/transpha_main.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="about-us">
                <div class="row mt-20 mb-20">
                    <div class="col-md-5 col-xl-5 mx-auto my-auto mb-10">
                        <img src="@/static/images/transpha_main_2.png" />
                    </div>
                    <div class="col-md-1 col-xl-1"></div>
                    <div class="col-md-6 col-xl-6 mx-auto mb-10 mt-5">
                        <h4 class="text-danger text-capitalize text-xl font-medium tracking-wider">WHY TRANSPHA</h4>
                        <br/>
                        <p class="gb text-3xl font-medium tracking-wide">Here are reasons why you</p>
                        <p class="gb text-3xl font-medium tracking-wide">should use transpha</p>
                        <br />
                        <div class="row">
                            <div class="col">
                                <i class="fas fa-search  color-green fa-2x m-2"></i>
                                <p class="font-medium">Transfer</p>
                                <p class="font-light text-break">Transfer files and folders at high speed between Pcs</p>
                            </div>
                            <div class="col">
                                <i class="fas fa-dollar-sign color-green fa-2x m-2"></i>
                                <p class="font-medium">Share</p>
                                <p class="font-light text-break">Share files across PCs on different Operating Systems.</p>
                            </div>
                            <div class="col">
                                <i class="fas fa-users color-green fa-2x m-2"></i>
                                <p class="font-medium">Control</p>
                                <p class="font-light text-break">Be in charge of your system from your mobile device. Control and simulate keyboard operations on your mobile device.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="products">
                <div class="m-20">
                    <p class="gb text-4xl font-medium text-decoration-underline text-center">Products</p>

                    <div id="product1">
                        <div class="row pt-20">
                            <div class="col-md-5">
                                <img src="@/static/images/transpha_products_1.png" />
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5 my-auto mx-auto">
                                <p class="font-semibold text-4xl gb">T-Keys</p>
                                <p class="text-break font-light tracking-wide mt-5">
                                    The social app for influencers. Be certain that 
                                    your favorite influencers will see your 
                                    messages and respond to you. All for a small 
                                    fee.
                                </p>
                                <p class="mt-5"><button class="btn bg-custom-green btn-rounded text-white px-8 py-3 text-capitalize text-sm">Learn more</button></p>
                            </div>
                        </div>
                    </div>

                    <div id="product2" >
                        <div class="row pt-20">
                            <div class="col-md-5 my-auto mx-auto">
                                <p class="font-semibold text-4xl gb">T-Files</p>
                                <p class="text-break font-light tracking-wide mt-5">
                                    The social app for influencers. Be certain that 
                                    your favorite influencers will see your 
                                    messages and respond to you. All for a small 
                                    fee.
                                </p>
                                <p class="mt-5"><button class="btn bg-custom-green btn-rounded text-white px-8 py-3 text-capitalize text-sm">Learn more</button></p>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <p class="color-green text-5xl font-semibold blur">COMING SOON</p>
                            </div>
                        </div>
                    </div>

                     <div id="product3">
                        <div class="row pt-20">
                            <div class="col-md-5">
                                <p class="color-green text-5xl font-semibold blur">COMING SOON</p>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5 my-auto mx-auto">
                                <p class="font-semibold text-4xl gb">T-Keys</p>
                                <p class="text-break font-light tracking-wide mt-5">
                                    The social app for influencers. Be certain that 
                                    your favorite influencers will see your 
                                    messages and respond to you. All for a small 
                                    fee.
                                </p>
                                <p class="mt-5"><button class="btn bg-custom-green btn-rounded text-white px-8 py-3 text-capitalize text-sm">Learn more</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact-us">

            </div>
            <div id="footer mt-20">
                <Footer />
            </div>
        </div>
    </v-app>
</template>

<script>
export default {}
</script>

<style>
    .app {
        font-family: 'Montserrat';
    }

    h1, h2, h3, h4 {
        font-family: 'Montserrat';
    }

    .gb {
        font-family: 'Gentium Basic';
    }

    .color-green {
        color: #5CAE69;
    }

    .bg-custom-green {
        background-color: #5CAE69;
    }

    .bg-img-main {
        background: url('@/static/images/mask_copy_2.png');
    }

    #intro {
        min-height: 100%;
    }

    .blur {
        filter: blur(3px);
    }
</style>
