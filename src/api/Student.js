import axios from "../utils/axios";


export function studentSave(params){
    return axios({
        url: '/student/save',
        method: 'POST',
        params
    })
}

export function studentSearch(params){
    return axios({
        url: '/student/search',
        method: 'GET',
        params
    })
}

export function studentList(pageSize){
    return axios({
        url: `/student/list/1/${pageSize}`,
        method: 'GET',
    })
}

export function studentLists(page,pageSize){
    return axios({
        url: `/student/list/${page}/${pageSize}`,
        method: 'GET',
    })
}

export function studentFindById(id){
    return axios({
        url: `/student/findById/${id}`,
        method: 'GET',
    })
}

export function studentUpdate(params){
    return axios({
        url: '/student/update',
        method: 'PUT',
        params
    })
}

export function studentDeleteById(id){
    return axios({
        url: `/student/deleteById/${id}`,
        method: 'delete',
    })
}