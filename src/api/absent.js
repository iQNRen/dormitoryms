import axios from "../utils/axios";


export function absentSearch(params){
    return axios({
        url: '/absent/search',
        method: 'GET',
        params
    })
}

export function absentList(pageSize){
    return axios({
        url: `/absent/list/1/${pageSize}`,
        method: 'GET',
    })
}

export function absentLists(page,pageSize){
    return axios({
        url: `/absent/list/${page}/${pageSize}`,
        method: 'GET',
    })
}

export function findDormitoryByBuildingId(id){
    return axios({
        url: `/absent/findDormitoryByBuildingId/${id}`,
        method: 'GET',
    })
}

export function findStudentByDormitoryId(id){
    return axios({
        url: `/absent/findStudentByDormitoryId/${id}`,
        method: 'GET',
    })
}

export function absentSave(params){
    return axios({
        url: '/absent/save',
        method: 'POST',
        params
    })
}

export function buildingList(){
    return axios({
        url: '/absent/buildingList',
        method: 'GET',
    })
}
