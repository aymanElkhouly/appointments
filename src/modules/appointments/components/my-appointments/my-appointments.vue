<template>
 <section class="my-appointments row">
     <div class="col-lg-4 col-sm-12 my-2">
         <createAppointment></createAppointment>
     </div>
     <div class="col-lg-8 col-sm-12 my-2">
         <b-tabs>
             <b-tab active>
                 <template v-slot:title>
                     <div class="d-inline-flex justify-content-center align-items-center">
                         <img class="small-icon mx-1" src="@/assets/black.svg">
                         <div class="mx-1">Upcoming</div>
                     </div>
                 </template>
                 <div class="overflow-content">
                     <component :is="component"></component>
                 </div>
             </b-tab>

             <b-tab>
                 <template v-slot:title>
                     <div class="d-inline-flex justify-content-center align-items-center">
                         <img class="small-icon mx-1" src="@/assets/white.svg">
                         <div class="mx-1">History</div>
                     </div>
                 </template>

             </b-tab>
         </b-tabs>
     </div>
 </section>
</template>

<script src="./my-appointments.js"></script>
<style lang="scss" src="./my-appointments.scss" ></style>


