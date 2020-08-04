import services from '../../services/appointments.service'

export default {
    name: "create-appointments",
    data() {
        return {
            service: null,
            selectedCenter: null,
            medicalCenters: [],
            dateValue: null,
            dateContext: null,
            bookingTime: null,
            timePicker: [
                "02:15", "02:30", "02:45",
                "03:15", "03:30", "03:45",
                "04:15", "04:30", "04:45"
            ]
        }
    },
    created() {
        // using singleton service //
        this.service = services;
    },
    mounted() {
        // using service layer to call axios to get json file with data //
        this.service.getMedicalServices()
            .then(res => {
                this.medicalCenters = res.data.medical_centers;
            })
    },
    destroyed() {
        this.$store.dispatch("setActiveCenter", null);
    },
    methods: {
        selectCenter() {
            // Set current selected center to store to show it on medical info center component //
            this.$store.dispatch("setActiveCenter", this.selectedCenter);
        },
        onContext(ctx) {
            // For calendar //
            this.dateContext = ctx;
        },
        setTime(time) {
            // Time Selection //
            this.bookingTime = time;
        },
        save() {
            // Check if all data valid //
            if (this.bookingTime && this.dateValue && this.selectedCenter) {
                let data = {
                    center: this.selectedCenter,
                    date: this.dateValue,
                    time: this.bookingTime
                }
                // Save Data to store //
                this.$store.dispatch("bookAppointment", data)
                    .then(() => {
                        this.showAlert("success", "appointment booked successfully");
                    })
            }
        },
        showAlert(variant = null, message = null) {
            // Simple Method to show bootstrap alerts (toasts) //
            this.$bvToast.toast(message, {
                title: `${variant || 'success'}`,
                variant: variant,
                solid: false
            })
        }
    }
}
