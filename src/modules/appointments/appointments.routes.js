import BookingAppointments from './components/medical-center-info/medical-center-info.vue'
import MyAppointments from './components/my-appointments/my-appointments.vue'

export default [
    {
        path: '',
        name: 'BookingAppointments',
        component: BookingAppointments,
        props: false,
        meta:{}
    },
    {
        path: 'my-appointments',
        name: 'MyAppointments',
        component: MyAppointments,
        props: false,
        meta:{}
    },

]
