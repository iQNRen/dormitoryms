import axios from "../utils/axios";


export function dormitorySearch(params){
    return axios({
        url: '/dormitory/search',
        method: 'GET',
        params
    })
}

export function dormitoryFindById(id){
    return axios({
        url: `/dormitory/findById/${id}`,
        method: 'GET',
    })
}

export function dormitoryAvailableList(){
    return axios({
        url: '/dormitory/availableList',
        method: 'GET',
    })
}

export function dormitoryList(pageSize){
    return axios({
        url: `/dormitory/list/1/${pageSize}`,
        method: 'GET',
    })
}

export function dormitoryLists(page,pageSize){
    return axios({
        url: `/dormitory/list/${page}/${pageSize}`,
        method: 'GET',
    })
}

export function dormitoryDeleteById(id){
    return axios({
        url: `/dormitory/deleteById/${id}`,
        method: 'delete',
        params
    })
}

export function dormitorySave(params){
    return axios({
        url: '/dormitory/save',
        method: 'POST',
        params
    })
}

export function dormitoryUpdate(params){
    return axios({
        url: '/dormitory/update',
        method: 'PUT',
        params
    })
}
