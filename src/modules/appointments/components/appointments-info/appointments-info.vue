<template>
 <section class="appointments-info">
     <div v-for="item in getAppointments" :key="item.id" class="item my-2">
         <div class="header text-left justify-content-start align-items-center">
             <span class="mx-2">
                 <img alt="calender" class="rounded small-icon" src="@/assets/calender-white.svg"/>
             </span>
             <span>{{item.date}}</span>
         </div>
         <div class="content row m-0 p-3">
              <div class="col-lg-3 col-md-12">
                  <img alt="service" class="thumb" src="@/assets/book-appointment@3x.jpg"/>
              </div>
              <div class="col-lg-9 col-md-12 d-flex flex-column pt-3 justify-content-start align-items-start">
                  <p class="text-left title">
                     {{item.center.name}}
                  </p>
                  <div class="address">
                      <div class="d-inline-flex">
                          <img alt="calender" class="rounded small-icon" src="@/assets/calender-white.svg"/>
                          <p class="address mx-2">
                              {{item.center.address}}
                          </p>
                      </div>
                  </div>
              </div>
         </div>
     </div>
 </section>
</template>

<script src="./appointments-info.js"></script>
<style lang="scss" src="./appointments-info.scss" scoped></style>


