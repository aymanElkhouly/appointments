import RestResource from '../../services/appointments.service'
export default {
    name: "create-appointments",
    data() {
        return {
            service:null,
            selectedCenter:null,
            medicalCenters:[]
        }
    },
    created(){
        this.service = new RestResource();
    },
    mounted(){
        this.service.getMedicalServices().then(res =>{
            console.log("REsponse From json",res)
            this.medicalCenters = res.data.medical_centers;
        })
    },
    methods:{
        selectItem(item){
          return item;
        }
    }
}
