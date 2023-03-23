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
export const BY_WEIGHT = 'BY_WEIGHT'   

export function getAllDogs () {
    try {
       return async (dispatch) => {
        const {data} = await axios.get('/dogs')
        dispatch({type: GET_ALL_DOGS, payload: data})
       }
    } catch (error) {
        console.log(error)
    }
}
export const byId = id => dispatch => {
    try {
        return axios.get(`/dogs/${id}`)
        .then(res => dispatch({type: BY_ID, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const byName = name => dispatch => {
    try {
        return axios.get(`/dogs?name=${name}`)
            .then(res => dispatch({type: BY_NAME, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const byWeight = weight => dispatch => {
    try {
        return axios.get(`/dogs?weight=${weight}`)
            .then(res => dispatch({type: BY_WEIGHT, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}

export const byTemp = temp => dispatch => {
    try {
        return axios.get(`/dogs?temperament=${temp}`)
            .then(res => dispatch({type: BY_TEMP, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}

export const createRace = values => dispatch => {
    try{
        return axios.post('/dogs/add', {...values})
            .then(res => {
                return dispatch({type:CREATE_RACE, payload: res.data})})
    }catch(err){
        console.log(err)
    }
}

export const getTemps = () => dispatch => {
    try {
        return axios.get(`/temperaments`)
            .then(res => dispatch({type: GET_TEMPS, payload: res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const byOrder = payload => ({type: BY_ORDER, payload })

export const tempForDog  = payload => ({type:TEMP_FOR_DOG, payload})
export const unmountTemps = (data) => ({type:UNMOUNT_TEMPS, payload: data})
export const unmountDogs = () => ({type:UNMOUNT_DOGS})