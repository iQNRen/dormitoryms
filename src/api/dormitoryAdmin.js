import axios from "../utils/axios";

export function dormitoryAdminLogin(params){
    return axios({
        url: '/dormitoryAdmin/login',
        method: 'GET',
        params
    })
}


export function dormitoryAdminSearch(params){
    return axios({
        url: '/dormitoryAdmin/search',
        method: 'GET',
        params
    })
}

export function dormitoryAdminFindById(id){
    return axios({
        url: `/dormitoryAdmin/findById/${id}`,
        method: 'GET',
    })
}

export function getDormitoryList(pageSize){ 
    return axios({
        url: `/dormitoryAdmin/list/1/${pageSize}`,
        method: 'GET',
    })
}

export function getDormitoryLists(){ 
    return axios({
        url: `/dormitoryAdmin/list/`,
        method: 'GET',
    })
}


export function dormitoryAdminDeleteById(id){
    return axios({
        url: `/dormitoryAdmin/deleteById/${id}`,
        method: 'DELETE',
    })
}

export function dormitoryAdminUpdate(params){ 
    return axios({
        url: '/dormitoryAdmin/update/',
        method: 'PUT',
        params
    })
}

export function dormitoryAdminSave(params){
    return axios({
        url: '/dormitoryAdmin/save',
        method: 'POST',
        params
    })
}