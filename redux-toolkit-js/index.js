// Action type, Action creator, Reducer, Store

// Slice.js -> action type, action creator
// Store -> Reducer and store

const store = require('./store')
const { carActions } = require('./carSlice')
const { fetchPosts } = require('./postsSlice')


console.log('Initial state', store.getState());
store.dispatch(fetchPosts())

// store.dispatch(carActions.buyCar(2))
store.subscribe(() => console.log('state changed', store.getState()))