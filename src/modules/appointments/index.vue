<template>
<div>
    <appointments-navbar></appointments-navbar>
    <div class="mt-3">
        <router-view/>
    </div>
</div>
</template>

<script>
    import appointmentsNavbar from './global/appointmentsNavbar/appointmentsNavbar.vue'
    export default {
        name: "index",
        comments:{
            appointmentsNavbar
        },
        data() {
            return {
            }
        },
        created(){

        },
        mounted(){
            console.log("Index Component");
        },
        methods:{

        },
    }
</script>

<style scoped>

</style>
