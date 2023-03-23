import {
    GET_ALL_DOGS,
    BY_NAME,
    BY_TEMP,
    TEMP_FOR_DOG,
    CREATE_RACE,
    UNMOUNT_TEMPS,
    GET_TEMPS,
    UNMOUNT_DOGS,
    BY_ORDER,
    BY_ID,
    BY_WEIGHT
} from './action'

const initialState = {
    allDogs: [],
    dogs: [],
    temps: [],
    tempsForDog: [] 
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DOGS: 
        return{
            ...state,
            allDogs: action.payload,
            dogs: action.payload.map( p => {
                return {
                    ...p,
                    promedio: parseFloat(p.weight.replace(' - ', '.'))
                }
            })
        }
        case BY_ID:
            return{
                ...state,
                dogs: action.payload
            }
        case BY_NAME:
            return{
                ...state,
                dogs: action.payload.map(p => {
                    return {
                        ...p,
                        promedio: parseFloat(p.weight.replace(' - ', '.'))
                    }
                })
            }
        case BY_WEIGHT: 
            return{
                ...state,
                dogs: action.payload.map(p => {
                    return {
                        ...p,
                        promedio: parseFloat(p.weight.replace(' - ', '.'))
                    }
                })
            }
        case BY_TEMP: 
            return{
                ...state,
                dogs: action.payload.map(p => {
                    return {
                        ...p,
                        promedio: parseFloat(p.weight.replace(' - ', '.'))
                    }
                })  
            }
        case CREATE_RACE: 
            return{
                ...state,
                tempsForDog: []
            }
        case TEMP_FOR_DOG:
            return action.payload === ''? state : state.tempsForDog.includes(action.payload)? state : {
                ...state,
                tempsForDog: [ ...state.tempsForDog, action.payload]
            }
        case UNMOUNT_TEMPS:
            return{
                ...state,
                tempsForDog: state.tempsForDog.filter(el => el !== action.payload)
            }
        case GET_TEMPS: 
            return{
                ...state,
                temps: action.payload
            }
        case UNMOUNT_DOGS:
            return{
                ...state,
                dogs: []
            }
        case BY_ORDER: 
            const orderName = action.payload === 'a-z' ?
            state.dogs.sort(function(a, b) {
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0;
            }) : action.payload === 'z-a'?
            state.dogs.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            }) : action.payload === 'menorMAYOR'?
            state.dogs.sort(function(a, b) {
                if(a.promedio > b.promedio) {
                    return 1;
                }
                if(b.promedio > a.promedio) {
                    return -1;
                }
                return 0;
            }): action.payload === 'MAYORmenor'?
            state.dogs.sort(function(a, b) {
                if(a.promedio > b.promedio) {
                    return -1;
                }
                if(b.promedio > a.promedio) {
                    return 1;
                }
                return 0;
            }): state.dogs
            return {
                ...state,
                characters: orderName
            }
        default: return state
    }
} 

export default rootReducer