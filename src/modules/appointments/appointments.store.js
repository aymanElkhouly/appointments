
export default {
    state: {
        appointments:[],
        selectedCenter:{}
    },
    mutations: {
        bookAppointment(state,payload){
            state.appointments.push(payload);
        },
        setActiveCenter(state,payload){
            state.selectedCenter = payload;
        }
    },
    actions: {
        bookAppointment({commit},payload){
            commit('bookAppointment', payload);
        },
        setActiveCenter({commit},payload){
            commit('setActiveCenter', payload);
        }
    },
    getters: {
        getAppointments(state){
            return state.appointments;
        },
        getSelectedCenter(state){
            return state.selectedCenter;
        }
    }
}
