import {mapGetters} from 'vuex'
export default {
    name: "appointments-info",
    data() {
        return {

        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    },
    computed:{
        ...mapGetters(['getAppointments'])
    }
}
