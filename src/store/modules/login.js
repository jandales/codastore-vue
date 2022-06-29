
import api from "../../api/api";

export default {    
    actions : {
        async login(context, credentials) {
           const { data } = await api.login(credentials);
           localStorage.setItem("access_token", data.token);
           localStorage.setItem('user', data.user)
           location.reload();                    
        }
    },
};