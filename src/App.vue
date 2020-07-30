<template>
    <div id="app">
        <header class="fixed-top" role="navigation">
            <div class="px-5 header-content d-flex flex-row  align-items-center">
                <div class="ml-5">
                    <img alt="hot line" class="rounded small-icon mx-3" src="@/assets/phone.svg"/>
                    <span>HotLine: 800725923</span>
                </div>
                <div class="mr-5 ml-md-auto">
                    <span>Eva Mourage</span>
                    <img alt="Profile image" class="rounded avatar mx-2" src="@/assets/profiel-img@2x.png"/>
                </div>
            </div>
        </header>
        <div id="nav" class="mt-5">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <div class="container content-box">
            <router-view/>
        </div>
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
                        <p class="mt-2 item-title">
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
                            <span class="item-title">HotLine: 211121</span>
                        </div>
                        <div class="mt-1 text-left">
                            <span class="mx-2">
                               <img alt="Email" class="rounded small-icon" src="@/assets/email.svg"/>
                            </span>
                            <span class="item-title">
                                <a class="item-title" href="mailto:Email: elkhouly.ayman@outlook.com">Email: Author</a>
                            </span>
                        </div>
                        <div class="mt-1 text-left">
                            <span class="mx-2">
                               <img alt="Address" class="rounded small-icon" src="@/assets/address-2.svg"/>
                            </span>
                            <span class="item-title">
                                Address: District 51 block 4
                            </span>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <p class="title text-uppercase">truedocx24</p>

                        <div class="mt-1 text-left">
                            <a class="item-title" href="">about us</a>
                        </div>
                        <div class="mt-1 text-left">
                            <a class="item-title" href="">policy</a>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <p class="title text-uppercase">quick access</p>

                        <div class="mt-1 text-left">
                            <a class="item-title" href="">book appointments</a>
                        </div>
                        <div class="mt-1 text-left">
                            <a class="item-title" href="">contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&display=swap');
    $base-color: #f4f4f4;
    $base-font-color: #4a4a4a;
    $cyan-color: #05aec7;
    $base-font: IBM Plex Sans;

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: $base-color;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .header-content {
        width: 100%;
        height: 60px;
        background-color: #084971;
        color: #FFFFFF;
    }

    .avatar {
        width: 50px;
        height: 50px;
    }

    .small-icon{
        width: 20px;
        height: 20px;
    }
.content-box{
    min-height: calc(100vh - 390px);
}
    .main-footer {
        position: relative;
        clear: both;
        min-height: 250px;
        height: auto;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0.5px 0px 8px 0px #00000040;
        opacity: 1;
        .title{
            text-align: left;
            font: 500 18px/30px $base-font;
            letter-spacing: 0px;
            color: $cyan-color;
            opacity: 1;
        }
        .item-title {
            text-align: left;
            font: 400 14px/36px $base-font;
            letter-spacing: 0px;
            color: $base-font-color;
            opacity: 1;
        }
        .logo{
            width: 80%;
        }
    }

</style>
