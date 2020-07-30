import createAppointment from '../create-appointments/create-appointments.vue'
import AppointmentsInfo from '../appointments-info/appointments-info.vue'
import {mapGetters} from 'vuex'

export default {
    name: "my-appointments",
    components:{
        createAppointment,
        AppointmentsInfo
    },
    data() {
        return {
            component:AppointmentsInfo
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
