import { BUY_CAR, ADD_CAR } from './carTypes'

export const buyCar = (num = 1) => {
    return {
        type: BUY_CAR,
        payload: num
    }
}

export const addCar = (num = 1) => {
    return {
        type: ADD_CAR,
        payload: num
    }
}