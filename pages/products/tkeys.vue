<template>
    <div>
        <div id="navigation-bar">
            <Navigation />
        </div>
        <div class="body my-10 mx-auto">
            <div class="mx-10 my-auto mb-30 text-center">
                <h1 class="font-black text-5xl underline tracking-widest">T-Keys</h1>
                <br />
                <p class="m-20 font-medium text-lg tracking-wide">
                    Get the TKeys app for seamless control of your laptop's keyboard 
                    and mouse. Download both the desktop and mobile apps to get started!
                </p>
                <p class="text-base tracking-widest font-semibold">
                    Note:
                    <br />
                    - TKeys is compatible with Windows 10, macOS 10.12 and later, iOS 11 and later, and Android 7.0 and later.
                    <br />
                    - Please ensure your devices meet the minimum system requirements for optimal performance.
                    <br />
                    - TKeys is free to download and use.
                </p>
                <div class="row row-cols-md-1 row-cols-md-3 md:mx-20 mt-16">
                    <div class="col-md-5 col-xl-5 mx-auto my-auto mb-10 sm:mb-20">
                        <div class="">
                            <p class="text-base tracking-widest font-semibold">Download the TKeys mobile app</p>
                            <img class="mx-auto" src="@/static/images/tkeys_mobile.png" />
                            <div class="row row-cols-sm-1 row-cols-sm-2 mt-20 mb-20">
                                <div class="row">
                                    <i class="fab fa-apple fa-3x"></i>
                                    <br />
                                    <p>Download on the App Store</p>
                                </div>
                                <div class="row">
                                    <a href="https://play.google.com/store/apps/details?id=com.transpha.T_Keys"><i class="fab fa-android fa-3x"></i></a>
                                    <br />
                                    <p>Get it on Google Play</p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="col-md-2 col-xl-2">

                    </div>
                    <div class="col-md-5 col-xl-5 mx-auto my-auto mb-10 sm:mb-20">
                        <div class="">
                            <p class="text-base tracking-widest font-semibold">Download the TKeys desktop app</p>
                            <img class="mx-auto" src="@/static/images/tkeys_desktop.png" />
                            <div class="row row-cols-sm-1 row-cols-sm-3 mt-20 mb-20">
                                <div class="row">
                                    <a href="https://transpha.org/downloads/windows/tkeyswindows-v1.exe"><i class="fab fa-windows fa-3x"></i></a>
                                    <br />
                                    <p>Download for Windows</p>
                                </div>
                                <div class="row">
                                    <i class="fab fa-linux fa-3x"></i>
                                    <br />
                                    <p>Download for Linux</p>
                                </div>
                                <div class="row">
                                    <i class="fab fa-apple fa-3x"></i>
                                    <br />
                                    <p>Download for MacOs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="sm:hidden h-3"/>
            <div id="footer mt-24">
                <Footer />
            </div>
        </div>
        <p class="text-center">© 2023. All rights reserved. TKeys is a trademark of transpha</p>
    </div>

</template>

<script>
export default {}
</script>

<style>
</style>
