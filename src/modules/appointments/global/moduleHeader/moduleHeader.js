import {mapGetters} from 'vuex'
export default {
    name: "moduleHeader",
    data() {
        return {
        }
    },
    created(){

    },
    mounted(){
        console.log("moduleHeader Component");
    },
    methods:{

    },
    computed:{
        ...mapGetters({pageTitle:'getPageTitle'})
    }
}
