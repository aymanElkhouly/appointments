import {mapGetters} from 'vuex'
export default {
    name: "appointments-info",
    data() {
        return {
           tabsClasses:[]
        }
    },
    created(){

    },
    mounted(){
      console.log("Active Component");
    },
    methods:{

    },
    computed:{
        ...mapGetters(['getAppointments'])
    }
}
