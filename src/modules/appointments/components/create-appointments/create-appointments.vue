<template>
<section class="create-appointments d-flex flex-column align-items-center">
    <div class="w-100">
        <h3>Make an Appointment</h3>
        <div class="center mt-4">
            <!--<span>
                <img class="providers" src="@/assets/vc.svg" alt="providers">
            </span>-->
            <h5 class="text-left">Booth name</h5>
            <b-form-select size="lg"  v-model="selectedCenter" class="mb-3">
                <b-form-select-option :value="null">Please select an option</b-form-select-option>
                <b-form-select-option v-for="item in medicalCenters" :key="item.id" :value="item.id">
                    {{item.name}}
                </b-form-select-option>
            </b-form-select>
            <!--<select  v-model="selectedCenter" class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option >Choose...</option>
                <option v-for="item in medicalCenters" :key="item.id" :value="item.id"
                        data-content="<img class='providers" src="@/assets/vc.svg" alt="providers'>">
                    {{item.name}}
                </option>
            </select>-->
        </div>
    </div>

</section>
</template>

<script src="./create-appointments.js"> </script>
<style lang="scss" src="./create-appointments.scss" scoped></style>


