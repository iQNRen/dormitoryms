import axios from "../utils/axios";


export function buildingSave(params){
    return axios({
        url: '/building/save/',
        method: 'POST',
        params
    })
}

export function buildingList(pageSize){
    return axios({
        url: `/building/list/1/${pageSize}`,
        method: 'GET',
    })
}

export function buildingLists(page,pageSize){
    return axios({
        url: `/building/list/${page}/${pageSize}`,
        method: 'GET',
    })
}


export function buildingFindById(id){
    return axios({
        url: `/building/findById/${id}`,
        method: 'GET',
        params
    })
}

export function buildingSearch(params){
    return axios({
        url: '/building/search',
        method: 'GET',
        params
    })
}

export function buildingListNone(){
    return axios({
        url: '/building/list',
        method: 'GET',
    })
}

export function buildingUpdate(params){
    return axios({
        url: '/building/update',
        method: 'PUT',
        params
    })
}

export function buildingDeleteById(id){
    return axios({
        url: `/building/deleteById/${id}`,
        method: 'delete',
    })
}
