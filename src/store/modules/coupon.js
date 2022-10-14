import api from '../../api/api';

export default {
    state : {
        coupon : null,
    },
    getters : {
        coupon : state => {
            return state.coupon;
        }
    },
    mutations : {
        SET_COUPON(state, data){
            state.coupon = data;
        }
    },
    actions : {
       async applyCoupon({commit}, body){
            const response = await api.applyCoupon(body);
            if(response.data.status === 200){
                commit('SET_COUPON',response.data.coupon);
            }
         
        },
        async getCoupon({commit}){
            const response =await api.getCoupon();
            if(response.data.status === 200){
                commit('SET_COUPON',response.data.coupon);
            }
        },
        async removeCoupon({commit}){
            const response = await api.removeCoupon();
            if(response.data.status === 200){
                commit('SET_COUPON',null);
            }
        }
    }
}