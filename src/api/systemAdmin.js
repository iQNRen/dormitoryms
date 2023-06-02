import axios from "../utils/axios";

export function systemAdminLogin(params){
    return axios({
        url: '/systemAdmin/login',
        method: 'GET',
        params
    })
}