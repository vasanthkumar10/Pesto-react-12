const { createSlice } = require('@reduxjs/toolkit')

// initial State
const initialState = {
    noOfCars: 20
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        buyCar: (state, action) => {
            state.noOfCars = state.noOfCars - action.payload
        },
        addCar: (state, action) => {
            state.noOfCars = state.noOfCars + action.payload
        }
    }
})

module.exports = {
     carActions: carSlice.actions,
     carReducer: carSlice.reducer
} // named export