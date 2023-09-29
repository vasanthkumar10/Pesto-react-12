const { createSlice } = require('@reduxjs/toolkit')

// initial State
const initialState = {
    noOfBikes: 20
}

const bikeSlice = createSlice({
    name: 'bike',
    initialState,
    reducers: {
        buyBike: (state, action) => {
            state.noOfBikes = state.noOfBikes - action.payload
        },
        addBike: (state, action) => {
            state.noOfBikes = state.noOfBikes + action.payload
        }
    }
})

module.exports = {
     bikeActions: bikeSlice.actions,
     bikeReducer: bikeSlice.reducer
} // named export