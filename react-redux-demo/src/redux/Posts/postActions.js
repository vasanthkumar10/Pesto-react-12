import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './postTypes'
import axios from 'axios'

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsFailure = (err) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: err
    }
}


// thunk
export const fetchPosts = (url) => {
    console.log('fetch posts');
    return function(dispatch) {
        dispatch(fetchPostsRequest())
        axios.get(url)
        .then((response) => {
            const posts = response.data;
            dispatch(fetchPostsSuccess(posts))
        }).catch((err) => {
            dispatch(fetchPostsFailure(err.message))
        })
    }
}
