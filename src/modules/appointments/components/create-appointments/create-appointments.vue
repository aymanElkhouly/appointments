<template>
<section class="create-appointments d-flex flex-column align-items-center p-3">
    <div class="w-100">
        <h3 class="text-left">Make an Appointment</h3>
        <div class="center mt-4">
            <h5 class="text-left">Booth name</h5>
            <b-form-select size="lg" @change="selectCenter"  v-model="selectedCenter" class="mb-3">
                <b-form-select-option :value="null">Please select an option</b-form-select-option>
                <b-form-select-option v-for="item in medicalCenters" :key="item.id" :value="item">
                    {{item.name}}
                </b-form-select-option>
            </b-form-select>
        </div>
        <div class="mt-3 text-left">
            <h5 class="text-left">Date</h5>
            <b-calendar width="100%" v-model="dateValue" @context="onContext" locale="en-US"></b-calendar>
        </div>

        <b-button :disabled="!(selectedCenter && dateValue)" @click="save" class="mt-3" block variant="primary">Book Now</b-button>

    </div>

</section>
</template>

<script src="./create-appointments.js"> </script>
<style lang="scss" src="./create-appointments.scss" scoped></style>


