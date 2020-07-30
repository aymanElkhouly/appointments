<template>
 <section class="appointments-info">
     <div v-for="item in getAppointments" :key="item.id" class="item">
         <div class="header">
          {{item.center.name}}
         </div>
         <div class="content">

         </div>
     </div>
 </section>
</template>

<script src="./appointments-info.js"></script>
<style lang="scss" src="./appointments-info.scss" scoped></style>


