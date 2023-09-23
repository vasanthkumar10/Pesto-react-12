import { BUY_CAR, ADD_CAR } from './carTypes'

const initialState = {
    numOfCars: 20
}

export const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAR:
            return {...state, numOfCars: state.numOfCars - action.payload}

        case ADD_CAR:
            return {...state, numOfCars: state.numOfCars + action.payload}

        default:
            return state
    }
}