<template>
    <v-app class="app">
        <div id="navigation-bar">
            <Navigation />
        </div>
        <div class="body my-10 mx-3">
            <div id="intro">
                <div class="row row-cols-md-1 row-cols-md-3 md:mx-20 mt-16">
                    <div class="col-md-5 col-xl-5 mx-auto my-auto mb-30 sm:mb-20 mx-12 sm:mx-1">
                        <p class="text-6xl sm:text-8xl font-bold gb">Be <span class="color-green text-decoration-none"> seamless.</span></p>
                        <br />
                        <p class="mt-3 text-lg sm:text-xl font-light">
                            Transpha is an organization dedicated to 
                        </p>
                        <p class="mt-1 text-lg sm:text-xl  font-light">
                            providing solutions for making interactions 
                        </p>
                            <p class="mt-1 text-lg sm:text-xl font-light">
                            between devices smooth and uninterrupted.
                        </p>
                        <br />
                        <div class="mt-3">
                            <a href="#products">
                                <p class="content-center sm:content-start col-10 sm:col-6 hidden md:block">
                                    <button class="btn bg-custom-green btn-rounded text-white px-8 py-3 text-capitalize text-sm">Check out our Products</button>
                                </p>
                                <p class="content-center sm:content-start col-10 sm:col-6 block md:hidden mx-auto mb-20 sm:mb-5">
                                    <button class="btn bg-custom-green btn-rounded text-white px-8 py-3 text-capitalize text-sm btn-block">Check out our Products</button>
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-1 col-xl-1">

                    </div>
                    <div class="col-md-6 col-xl-6 mx-auto sm:mb-20 mb-10">
                        <div class="bg-img-main">
                            <img class="mx-auto" src="@/static/images/transpha_main.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="about-us">
                <p class="gb text-4xl mx-auto text-center font-medium">About Us</p>
                <hr class="color-green mx-auto text-center h-2 w-20" style="height: 3px"/>

                <!-- larger screens -->
                <div class="mt-10 text-center hidden md:visible">
                    <p class="color-green gb text-center text:4xl sm:text-5xl font-semibold">Keep the header simple</p>
                    <br/>
                    <p class="gb text-center text:3xl sm:text-4xl font-semibold">and catchy as usual</p>
                    <br />
                    <p class="mt-10 sm:mt-20 mb-10 sm:mb-5 text-lg sm:text-xl mx-5 md:mx-96 font-light text-center ">
                        The social app for influencers. Be certain that 
                        your favorite influencers will see your messages 
                        and respond to you. All for a small fee.
                    </p>                    
                </div>
                <!-- smaller screens -->
                <div class="mt-10 text-center visible md:hidden leading-normal">
                    <h2 class="color-green gb text-center text:5xl font-semibold" style="font-size: 48px">Keeping </h2>
                    <h2 class="color-green gb text-center text:5xl font-semibold" style="font-size: 48px">the header </h2>
                    <h2 class="color-green gb text-center text:5xl font-semibold" style="font-size: 48px">simple <span class="text-black">and</span></h2>
                    <h2 class="gb text-center text:5xl font-semibold" style="font-size: 48px">catchy as</h2>
                    <h2 class="gb text-center text:5xl font-semibold" style="font-size: 48px">usual</h2>
                    <br />
                    <p class="mt-10 sm:mt-20 mb-10 sm:mb-5 text-lg sm:text-xl mx-5 md:mx-96 font-light text-center ">
                        The social app for influencers. Be certain that 
                        your favorite influencers will see your messages 
                        and respond to you. All for a small fee.
                    </p> 
                </div>

                <img src="@/static/images/transpha_about.png"  class="mt-10"/>
                <div id="our-story" class="row">
                    <div class="col-md-3"></div>
                    <div class=" col-md-6 my-auto mx-auto text-center">
                        <p class="text-danger text-center text-capitalize text-xl font-medium tracking-wider">
                            WHO WE ARE
                        </p>
                        <br />
                        <p class="text-center gb text-2xl sm:text-3xl">Keeping our <span class="color-green"> story </span>catchy</p>
                        <br />
                        <p class="text-lg sm:text-xl font-light text-center mx-3 sm:mx-96">
                            The social app for influencers. Be certain that your favorite influencers will 
                            see your messages and respond to you. All for a small fee. The social app for 
                            influencers. Be certain that your favorite influencers will see your messages 
                            and respond to you. All for a small fee.The social app for influencers. Be certain 
                            that your favorite influencers will see your messages and respond to you. 
                            All for a small fee.The social app for influencers. Be certain that your favorite 
                            influencers will see your messages and respond to you. All for a small fee..
                        </p>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
            <div id="why-us">
                <div class="row mb-20">
                    <div class="col-md-5 col-xl-5 mx-auto my-auto mb-10">
                        <img src="@/static/images/transpha_why_us.png" />
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
                <div class="my-20 mx-5">
                    <p class="gb text-4xl mx-auto text-center font-medium">Products</p>
                    <hr class="bg-green-800 mx-auto text-center h-2 w-20 mb-20" style="height: 3px"/>

                    <div id="product1">
                        <div class="row">
                             <div class="col-md-5 my-auto mx-auto md:order-3">
                                <p class="font-semibold text-4xl gb">T-Keys</p>
                                <p class="text-break font-light tracking-wide mt-5">
                                    The social app for influencers. Be certain that 
                                    your favorite influencers will see your 
                                    messages and respond to you. All for a small 
                                    fee.
                                </p>
                                <p class="mt-5"><a href="/products/tkeys">
                                        <button class="btn bg-custom-green btn-rounded text-white px-8 py-3 text-capitalize text-sm">
                                            Learn more
                                        </button>
                                </a></p>
                            </div>
                            <div class="col-md-2 md:order-2"></div>
                            <div class="col-md-5 md:order-1 mt-10">
                                <img src="@/static/images/transpha_products_1.png" />
                            </div>
                        </div>
                    </div>

                    <div id="product2" >
                        <div class="row my-32 md:my-64">
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
                            <div class="col-md-2 order-second"></div>
                            <div class="col-md-5 my-auto sm:order-last pt-10">
                                <p class="color-green text-5xl font-semibold blur hidden md:block">COMING SOON</p>
                                <h4 class="color-green text-3xl font-semibold blur md:hidden block my-auto mx-auto">COMING SOON</h4>
                            </div>
                        </div>
                    </div>

                     <div id="product3">
                        <div class="row">
                            <div class="col-md-5 my-auto mx-auto md:order-3">
                                <p class="font-semibold text-4xl gb">T-Keys</p>
                                <p class="text-break font-light tracking-wide mt-5">
                                    The social app for influencers. Be certain that 
                                    your favorite influencers will see your 
                                    messages and respond to you. All for a small 
                                    fee.
                                </p>
                                <p class="mt-5"><button class="btn bg-custom-green btn-rounded text-white px-8 py-3 text-capitalize text-sm">Learn more</button></p>
                            </div>
                            <div class="col-md-2 md:order-2"></div>
                            <div class="col-md-5 my-auto md:order-1 pt-10">
                                <p class="color-green text-5xl font-semibold blur hidden md:block">COMING SOON</p>
                                <h4 class="color-green text-3xl font-semibold blur md:hidden block my-auto mx-auto">COMING SOON</h4>
                            </div>
                            

                        </div>
                    </div>

                </div>
            </div>
            <div id="contact-us" class="bg-custom-green py-24">
                <h3 class="text-white  gb text-4xl font-medium text-center">Contact Us</h3>
                <br />
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <form class="container" netlify>
                             <div class="mb-3">
                                <label for="exampleInputName" class="form-label text-white">Name</label>
                                <input id="exampleInputName"  type="text" class="form-control">
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-white">Email</label>
                                <input id="exampleInputEmail1"  type="email" class="form-control">
                            </div>

                             <div class="mb-3">
                                <label for="exampleInputphone" class="form-label text-white">Phone Number</label>
                                <input id="exampleInputphone"  type="number" class="form-control">
                            </div>

                            <div class="mb-8">
                                <label for="exampleInputmessage" class="form-label text-white">Message</label>
                                <div class="form">
                                    <textarea id="textAreaExample" class="form-control" rows="4"></textarea>
                                </div>
                            </div>
                            <button type="submit" class="btn bg-light btn-block text-success">Send Message</button>
                        </form>
                    </div>
                    <div class="col-md-4"></div>
                </div>

            </div>
            <hr class="sm:hidden h-3"/>
            <div id="footer mt-24">
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
        max-height: 100%;
    }

    .bg-img-main {
        background: url('@/static/images/mask_copy_2.png');
        background-size: cover
    }

    /* #intro {
        min-height: 100vh;
    } */

    .blur {
        filter: blur(3px);
    }

    #our-story {
        background: url('@/static/images/bg_who_we_are.png');
        background-size: cover;
        min-height: 120vh;
    }

</style>
