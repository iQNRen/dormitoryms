import axios from "../utils/axios";


export function moveSearch(params){
    return axios({
        url: '/moveout/search',
        method: 'GET',
        params
    })
}


export function moveList(pageSize){
    return axios({
        url: `/moveout/list/1/${pageSize}`,
        method: 'GET',
    })
}

export function moveLists(page,pageSize){
    return axios({
        url: `/moveout/list/${page}/${pageSize}`,
        method: 'GET',
    })
}

export function moveoutList(pageSize){
    return axios({
        url: `/moveout/moveoutList/1/${pageSize}`,
        method: 'GET',
    })
}

export function moveoutLists(page,pageSize){
    return axios({
        url: `/moveout/moveoutList/${page}/${pageSize}`,
        method: 'GET',
    })
}


export function moveoutMoveout(id,value){
    return axios({
        url: `/moveout/moveout/${id}/${value}`,
        method: 'PUT',
    })
}

export function moveoutSearch(params){
    return axios({
        url: '/moveout/moveoutSearch',
        method: 'GET',
        params
    })
}
