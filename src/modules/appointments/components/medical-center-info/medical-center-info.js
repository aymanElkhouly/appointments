import createAppointment from '../create-appointments/create-appointments.vue'
import {mapGetters} from 'vuex'
export default {
    name: "booking",
    components:{createAppointment},
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
        ...mapGetters({selectedCenter: 'getSelectedCenter'})
    }
}
