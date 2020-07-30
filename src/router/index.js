import Vue from 'vue'
import VueRouter from 'vue-router'
import AppointmentsRoutes from '../modules/appointments/appointments.routes.js'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import( /* webpackChunkName: "appointments" */ '../modules/appointments'),
        children: AppointmentsRoutes
    },
    {
        path: '/appointments',
        component: () => import( /* webpackChunkName: "appointments" */ '../modules/appointments'),
        children: AppointmentsRoutes
    },
]

const router = new VueRouter({
    routes
})

export default router
