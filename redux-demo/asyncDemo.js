const { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    data: [],
    error: null
}

// action types
const FETCH_POSTS_REQUEST = 'FETCH_POST_REQUEST'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

// action creators (factory)
const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

const fetchPostsFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_REQUEST:
            return {...state, loading: true}
        case FETCH_POSTS_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case FETCH_POSTS_FAILURE:
            return {...state, loading: false, error: action.payload}
    }
}

// thunk
const fetchPosts = () => {
    return function(dispatch) {
        dispatch(fetchPostsRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            const posts = response.data
            dispatch(fetchPostsSuccess(posts))
        }).catch((err) => {
            dispatch(fetchPostsFailure(err.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log('state -------->', store.getState()))
store.dispatch(fetchPosts())