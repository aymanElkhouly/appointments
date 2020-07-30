<template>
<div>
    <header></header>
    <router-view/>
</div>
</template>

<script>
    import header from "./shared/header/header.vue";
    export default {
        name: "index",
        comments:{
            header
        }
    }
</script>

<style scoped>

</style>
