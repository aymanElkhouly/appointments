import RestResource from '../../services/appointments.service'
export default {
    name: "create-appointments",
    data() {
        return {
            service:null,
            selectedCenter:null,
            medicalCenters:[],
            dateValue: null,
            dateContext: null,
            bookingTime:null,
            timePicker:[
                "02:15","02:30","02:45",
                "03:15","03:30","03:45",
                "04:15","04:30","04:45"
            ]
        }
    },
    created(){
        this.service = new RestResource();
    },
    mounted(){
        this.service.getMedicalServices().then(res =>{
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
        setTime(time){
            this.bookingTime = time;
        },
        save(){
            let data = {
                center: this.selectedCenter,
                date: this.dateValue,
                time: this.bookingTime
            }
            this.$store.dispatch("bookAppointment",data)
                .then(()=>{
                    this.showAlert("success","appointment booked successfully");
                })
        },
        showAlert(variant = null, message = null) {
            this.$bvToast.toast(message, {
                title:`${variant || 'success'}`,
                variant: variant,
                solid: false
            })
        }
    }
}
