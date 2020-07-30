
export default {
    state: {
        appointments:[],
        selectedCenter:{},
        pageTitle:""
    },
    mutations: {
        bookAppointment(state,payload){
            state.appointments.push(payload);
        },
        setActiveCenter(state,payload){
            state.selectedCenter = payload;
        },
        setPageTitle(state,payload){
            state.pageTitle = payload;
        }
    },
    actions: {
        bookAppointment({commit},payload){
            commit('bookAppointment', payload);
        },
        setActiveCenter({commit},payload){
            commit('setActiveCenter', payload);
        },
        setPageTitle({commit},payload){
            commit('setPageTitle', payload);
        }
    },
    getters: {
        getAppointments(state){
            return state.appointments;
        },
        getSelectedCenter(state){
            return state.selectedCenter;
        },
        getPageTitle(state){
            return state.pageTitle;
        }
    }
}
