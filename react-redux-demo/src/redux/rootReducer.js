import { combineReducers } from 'redux'
import { carReducer } from './cars/carReducer'
import { postReducer } from './Posts/postReducer'

export const rootReducer = combineReducers({
    car: carReducer,
    post: postReducer
})