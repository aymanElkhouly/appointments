<template>
    <div id="app">
        <!--Top Header-->
        <header class="fixed-top" role="navigation">
            <div class="px-5 header-content row align-items-center justify-content-around">
                <div class="col d-flex justify-content-start align-items-center">
                    <img alt="hot line" class="rounded small-icon mx-3" src="@/assets/phone.svg"/>
                    <span>HotLine: 800725923</span>
                </div>
                <div class="col d-flex justify-content-end align-items-center">
                    <span class="mx-2">Eva</span>
                    <img alt="Profile image" class="rounded avatar mx-2" src="@/assets/profiel-img@2x.png"/>
                </div>
            </div>
        </header>
        <!--Top NavBar-->
        <div class="nav-links">
            <b-navbar toggleable="md" type="light" variant="light">

                <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
                <b-navbar-brand href="#">
                    <img class="nav-brand-img" src="@/assets/trudoc@2x.png" alt="company">
                </b-navbar-brand>
                <b-collapse  id="nav-text-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-text class="mx-2">
                            <router-link to="/appointments">Home</router-link>
                        </b-nav-text>
                        <b-nav-text class="mx-2">
                            <router-link to="/appointments/my-appointments">My Appointments</router-link>
                        </b-nav-text>
                        <b-nav-text class="mx-2">
                            <a>About us</a>
                        </b-nav-text>
                        <b-nav-text class="mx-2">
                            <a>Contact us</a>
                        </b-nav-text>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <!--Container-->
        <div class="content-box">
            <router-view/>
        </div>
        <!--Footer-->
        <footer class="main-footer">
            <div class="container-fluid">
                <div class="row justify-content-center align-items-start p-5  mt-2">
                    <div class="col-sm-12 col-md-6 col-lg-3 text-left">
                        <div>
                            <img alt="logo" class="logo" src="@/assets/trudoc@2x.png"/>
                        </div>
                        <div class="mt-5">
                            <span class="mx-2">
                               <img alt="facebook" class="rounded avatar" src="@/assets/facebook.svg"/>
                            </span>
                            <span class="mx-2">
                               <img alt="facebook" class="rounded avatar" src="@/assets/instgram.svg"/>
                            </span>
                            <span class="mx-2">
                               <img alt="facebook" class="rounded avatar" src="@/assets/twitter.svg"/>
                            </span>
                        </div>
                        <p class="mt-2 small-titles">
                            Copyright © 2020 TrueDoc.
                        </p>
                        <div>

                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3 ">
                        <p class="title text-uppercase">contact us</p>
                        <div class="mt-1 text-left">
                            <span class="mx-2">
                               <img alt="facebook" class="rounded small-icon" src="@/assets/phone-2.svg"/>
                            </span>
                            <span class="small-titles">HotLine: 211121</span>
                        </div>
                        <div class="mt-1 text-left">
                            <span class="mx-2">
                               <img alt="Email" class="rounded small-icon" src="@/assets/email.svg"/>
                            </span>
                            <span class="small-titles">
                                <a class="small-titles" href="mailto:Email: elkhouly.ayman@outlook.com">Email: Author</a>
                            </span>
                        </div>
                        <div class="mt-1 text-left">
                            <span class="mx-2">
                               <img alt="Address" class="rounded small-icon" src="@/assets/address-2.svg"/>
                            </span>
                            <span class="small-titles">
                                Address: District 51 block 4
                            </span>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <p class="title text-uppercase">truedocx24</p>

                        <div class="mt-1 text-left">
                            <a class="small-titles" href="">about us</a>
                        </div>
                        <div class="mt-1 text-left">
                            <a class="small-titles" href="">policy</a>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <p class="title text-uppercase">quick access</p>

                        <div class="mt-1 text-left">
                            <a class="small-titles" href="">book appointments</a>
                        </div>
                        <div class="mt-1 text-left">
                            <a class="small-titles" href="">contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">

</style>
