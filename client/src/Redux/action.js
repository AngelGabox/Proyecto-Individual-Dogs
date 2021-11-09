const axios = require('axios')
export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const BY_NAME = "BY_NAME"
export const BY_TEMP = 'BY_TEMP'
export const GET_TEMPS = 'GET_TEMPS'
export const TEMP_FOR_DOG = 'TEMPS_FOR_DOG'
export const CREATE_RACE = 'CREATE_RACE'
export const UNMOUNT_TEMPS= 'UNMOUNT_TEMPS'
export const UNMOUNT_DOGS = 'UNMOUNT_DOGS'
export const BY_ORDER = 'BY_ORDER'
export const BY_ID = 'BY_ID'

export const getAllDogs = () => dispatch => {
    try {
        return axios.get('http://localhost:3001/dogs')
        .then(res => dispatch({type: GET_ALL_DOGS, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const byId = id => dispatch => {
    try {
        return axios.get(`http://localhost:3001/dogs/${id}`)
        .then(res => dispatch({type: BY_ID, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const byName = name => dispatch => {
    try {
        return axios.get(`http://localhost:3001/dogs?name=${name}`)
            .then(res => dispatch({type: BY_NAME, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}

export const byTemp = temp => dispatch => {
    try {
        return axios.get(`http://localhost:3001/dogs?temperament=${temp}`)
            .then(res => dispatch({type: BY_TEMP, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}

export const createRace = values => dispatch => {
    try{
        return axios.post('http://localhost:3001/dogs/add', {...values})
            .then(res => {
                return dispatch({type:CREATE_RACE, payload: res.data})})
    }catch(err){
        console.log(err)
    }
}

export const getTemps = () => dispatch => {
    try {
        return axios.get(`http://localhost:3001/temperaments`)
            .then(res => dispatch({type: GET_TEMPS, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const byOrder = payload => ({type: BY_ORDER, payload })

export const tempForDog  = payload => ({type:TEMP_FOR_DOG, payload})
export const unmountTemps = () => ({type:UNMOUNT_TEMPS})
export const unmountDogs = () => ({type:UNMOUNT_DOGS})