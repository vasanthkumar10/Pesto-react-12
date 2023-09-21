// redux -  goood to know topic
// Redux -  a predictable state management tool

// manage the state -> useState, useReducer
// for smaller apps -> above is enough with context API

// REDUX -> enterprise apps
// It makes the normal code into a complex one

// REDUX -> is common for all JS frameworks -> React, Vue, Angular and Vanilla JS. 
// react-redux -> bridge between react and redux

/**
 * --------------------------------
 * REDUX -> 3 main principles
 * --------------------------------
 * 
 * 1. Store -> holds the state of entire application -> always use 1 store
 * 2. Action -> describes the event -> what happens in the component
 * 3. Reducer -> connects the component and the store -> make changes in the store
 */

// Notes:
// 1. The state of the entire app is stored in single (store)
// 2. Only way to change the state is by emitting (dispatch) an action
// 3. to specify how the state should change, always inform reducer

const { createStore, combineReducers, applyMiddleware } = require('redux')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

// ACTION TYPES
const BUY_CAR = 'BUY_CAR'
const ADD_CAR = 'ADD_CAR'
const BUY_BIKE = 'BUY_BIKE'
const ADD_BIKE = 'ADD_BIKE'
const MAKE_PAYMENT = 'MAKE_PAYMENT'

// Action object
// let obj = {
//     type: BUY_CAR, 
//     payload: {
//         quantity: 1,
//         model: 'maruti baleno',
//         year: 2023,
//         type: 'VXI automatic transmission'
//     }
// }

// action creator (factory method)
function buyCar() {
    return {
        type: BUY_CAR,
        payload: {
            quantity: 1,
            model: 'maruti baleno',
            year: 2023,
            type: 'VXI automatic transmission'
        }
    }
}

function addCar(qnty = 1) {
    return {
        type: ADD_CAR,
        quantity: qnty
    }
}

function buyBike() {
    return {
        type: BUY_BIKE,
        payload: {
            quantity: 1,
            brand: 'TVS',
            model: 'RTR 310'
        }
    }
}

function addBike(qnty) {
    return {
        type: ADD_BIKE,
        quantity: qnty
    }
}

function makePayment(amount) {
    return {
        type: MAKE_PAYMENT,
        payload: {
            amount
        }
    }
}

// initial state
const initialCarState = {
    noOfCars: 10
}

const initialBikeState = {
    noOfBikes: 5,
}

const initialPaymentState = {
    amount: 0
}

// reducer
const carReducer = (state = initialCarState, action) => {
    // console.log('car action', action);
    switch(action.type) {
        case BUY_CAR:
            return {...state, noOfCars: state.noOfCars - 1}
        
        case ADD_CAR:
            return {...state, noOfCars: state.noOfCars + action.quantity}

        default:
            return state
    }
}

const bikeReducer = (state = initialBikeState, action) => {
    // console.log('bike action', action);
    switch(action.type) {
        case BUY_BIKE:
            return {...state, noOfBikes: state.noOfBikes - 1}

        case ADD_BIKE:
            return {...state, noOfBikes: state.noOfBikes + action.quantity}

        default:
            return state
    }
}

const paymentReducer = (state = initialPaymentState, action) => {
    // console.log('payment action', action);
    switch(action.type) {
        case MAKE_PAYMENT:
            return {...state, amount: state.amount + action.payload.amount}
        
        case BUY_CAR:
            return {...state, amount: state.amount + 100000}

        default:
            return state
    }
}

// reducer
const rootReducer = combineReducers({
    car: carReducer,
    bike: bikeReducer,
    payment: paymentReducer
})

// store
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState());

// subscription
// const unsubscribe = store.subscribe(() => console.log('store changed', store.getState()))

// action gets dispatched
store.dispatch(buyCar())
store.dispatch(buyCar())
store.dispatch(addCar(2))
store.dispatch(addCar(10))
store.dispatch(buyBike())
store.dispatch(addBike(10))
store.dispatch(makePayment(100))

// unsubscribe()
// console.log('Unsubscribed.....');
// store.dispatch(makePayment(1000))
// store.dispatch(addBike(100))