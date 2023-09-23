import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './postTypes'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_REQUEST:
            return {...state, loading: true}
        case FETCH_POSTS_SUCCESS:
            return {loading: false, data: action.payload, error: null}
        case FETCH_POSTS_FAILURE:
            return {loading: false, error: action.payload, data: []}
        default:
            return state
    }
}