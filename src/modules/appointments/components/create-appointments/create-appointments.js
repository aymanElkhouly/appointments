import RestResource from '../../services/appointments.service'
export default {
    name: "create-appointments",
    data() {
        return {
            service:null,
            selectedCenter:null,
            medicalCenters:[],
            dateValue: null,
            dateContext: null
        }
    },
    created(){
        this.service = new RestResource();
    },
    mounted(){
        this.service.getMedicalServices().then(res =>{
            console.log("Response From json",res)
            this.medicalCenters = res.data.medical_centers;
        })
    },
    destroyed(){
        this.$store.dispatch("setActiveCenter",null);
    },
    methods:{
        selectCenter(){
            this.$store.dispatch("setActiveCenter",this.selectedCenter);
        },
        onContext(ctx) {
            this.dateContext = ctx;
        },
        save(){
            let data = {
                center: this.selectedCenter,
                date: this.dateValue,
                time: "02:40pm"
            }
            this.$store.dispatch("bookAppointment",data);
        }
    }
}
