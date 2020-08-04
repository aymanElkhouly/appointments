<template>
    <section class="booking row mb-5">
        <!--Lift Side-->
        <div class="col-lg-4 col-sm-12 my-2">
            <createAppointment></createAppointment>
        </div>
        <!--Right Side-->
        <div class="col-lg-8 col-sm-12 service-overview my-2 p-0">
            <img alt="background" class="w-100" src="@/assets/book-appointment@3x.jpg">
            <div v-if="selectedCenter && selectedCenter.id">
                <div class="p-2" >
                    <p class="text-left title mt-2">{{selectedCenter.name}}</p>
                    <div class="mt-2 text-left">
                        <span class="mx-1">
                            <img alt="" class="small-icon" src="@/assets/address-2.svg">
                        </span>
                        <span class="text-left small-titles ml-1 mr-3">
                          Address: {{selectedCenter.address}}
                        </span>
                        <span class="">
                           <img alt="" class="small-icon" src="@/assets/phone-2.svg">
                        </span>
                        <span class="text-left small-titles mx-1">
                          {{selectedCenter.phone}}
                        </span>
                    </div>
                </div>
                <div class="under-line mt-2"></div>

                <div class="services p-2">
                    <h5 class="text-left mt-3">Services</h5>
                    <div class="d-flex flex-row justify-content-around m-3">
                        <div class="" v-for="item in selectedCenter.services" :key="item.id">
                            <img alt="" class="rounded-circle" src="@/assets/services.svg">
                            <h6 class="mt-2">{{item}}</h6>
                        </div>
                    </div>
                </div>
                <div class="under-line "></div>

                <div class="p-2">
                    <h5 class="text-left mt-3 ">Location</h5>
                    <img alt="background" class="w-100" src="@/assets/location@3x.jpg">
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./medical-center-info.js"></script>
<style lang="scss" scoped src="./medical-center-info.scss"></style>


