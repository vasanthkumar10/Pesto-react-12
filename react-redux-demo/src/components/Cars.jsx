import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { buyCar, addCar  } from '../redux/cars/carActions'

function Cars(props) {
  const numOfCars = useSelector((state) => state.car.numOfCars)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>No of cars - {numOfCars}</h1>
      <button onClick={() => dispatch(buyCar())}>buy car</button>
      <button onClick={() => dispatch(addCar())}>add car</button>
    </div>
  )
}

export default Cars

// const mapStateToProps = (state) => {
//   // console.log('state', state);
//   return {
//     numOfCars: state.numOfCars
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   // console.log('dispatch', dispatch);
//   return {
//     buy: () => dispatch(buyCar()),
//     add: () => dispatch(addCar())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cars)