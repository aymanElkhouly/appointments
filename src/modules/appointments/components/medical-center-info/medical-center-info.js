import createAppointment from '../create-appointments/create-appointments.vue'
import {mapGetters} from 'vuex'
export default {
    name: "booking",
    components:{createAppointment},
    data() {
        return {
          pageTitle:"Book an Appointments"
        }
    },
    mounted(){
        // store page title to use it on header component //
        this.$store.dispatch("setPageTitle",this.pageTitle);
    },
    destroyed(){
        this.$store.dispatch("setPageTitle","");
    },
    methods:{

    },
    computed:{
        ...mapGetters({selectedCenter: 'getSelectedCenter'})
    }
}
