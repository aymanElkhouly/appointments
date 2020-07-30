<template>
<div>
    <module-header></module-header>
    <div class="mt-3 container">
        <router-view/>
    </div>
</div>
</template>

<script>
    import moduleHeader from './global/moduleHeader/moduleHeader.vue'
    export default {
        name: "index",
        components:{
            moduleHeader
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
