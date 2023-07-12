<template>
    <!-- Footer -->
    <footer class="text-left md:text-center text-lg-start bg-transparent text-muted p-10">

        <!-- Section: Links  -->
        <section class="">
            <div class="container text-left md:text-center text-md-start mt-5 my-auto mx-auto">
            <!-- Grid row -->
            <div class="row mt-3">
                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-1 sm:order-1">
                </div>

                <div class="col-md-5 col-lg-5 col-xl-6 mx-auto my-auto sm:order-last">
                    <!-- Links -->
                    <h5 class="font-bold mb-4">
                        Stay Updated
                    </h5>
                    <p class="mb-2">
                        <section class="">
                            <form action="">
                                <!--Grid row-->
                                <div class="">
                                <!--Grid column-->
                                <div class="col-auto">
                                    <p>
                                        Be the first to know about our products, features
                                    </p>
                                    <p class="pt-1">
                                        and other announcements
                                    </p>
                                    
                                    <br />
                                </div>
                                <!--Grid column-->

                                <!--Grid column-->
                                <div class="row d-flex my-auto mb-4">

                                    <div class="col-md-5 col-12">
                                        <!-- Email input -->
                                        <div class="form-outline form-white">
                                            <input id="form5Example21" type="email"  class="form-control base-green opacity-20 h-12 border-dark rounded-xl text-dark font-bold" />
                                            <label class="form-label text-success opacity-25 ml-1 mt-1 text-center my-auto font-semibold" for="form5Example21">Enter email address</label>
                                        </div>

                                    </div>
                                    <!--Grid column-->

                                    <!--Grid column-->
                                    <div class="col-auto">
                                        <!-- Submit button -->
                                        <button 
                                        type="submit" 
                                        class="btn btn-lg base-green btn-rounded bg-opacity-25 text-capitalize text-white py-2 px-5 font-semibold rounded-lg">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                                <!--Grid column-->
                                </div>
                                <!--Grid row-->
                            </form>
                        </section>
                    </p>
                </div>

                <!-- Grid column -->

                <hr class="sm:hidden h-3 my-5"/>
                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto my-auto mb-5 sm:order-3">
                    <!-- Links -->
                    <h5 class="font-bold mb-5">
                        Company
                    </h5>
                    <p class="mb-3">
                        <a href="#!" class="text-reset">Meet the Team</a>
                    </p>
                    <p class="mb-3">
                        <a href="#!" class="text-reset">Donate</a>
                    </p>
                </div>
                <!-- Grid column -->
                <hr class="sm:hidden h-3 my-5"/>
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto my-auto sm:order-2">
                    <!-- Content -->
                    <img src="@/static/images/transpha.png" alt="footer transpha logo"/>
                    <br />

                    <p class="mb-3">
                        <a href="#!" class="text-reset">Terms of Service</a>
                    </p>
                    <p class="mb-3">
                        <a href="/privacy" class="text-reset">Privacy Policy</a>
                    </p>
                    <p class="mb-3">
                        <a href="https://twitter.com/transpha" class="text-reset" target="_blank"><i class="fab fa-twitter"></i></a>
                    </p>
                </div>
            </div>
            </div>
        </section>
        <!-- Section: Links  -->

    </footer>
    <!-- Footer -->
</template>

<script>
export default {
    
}
</script>

<style scoped>

 .base-green {
    background-color: #5CAE69;
 }

 img {
     width: 30%;
     height: 30%;
 }

</style>