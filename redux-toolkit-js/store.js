const { configureStore } = require('@reduxjs/toolkit')
const { carReducer } = require('./carSlice');
const { bikeReducer } = require('./bikeSlice')
const { postsReducer } = require('./postsSlice')
// console.log('reducer in store', carReducer);

const store = configureStore({
    reducer: {
        car: carReducer,
        bike: bikeReducer,
        posts: postsReducer
    }
});

module.exports = store;