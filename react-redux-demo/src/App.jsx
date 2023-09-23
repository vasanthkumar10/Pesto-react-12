import React from "react";
import Cars from "./components/Cars";
import { Posts } from "./components/Posts";
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cars /> 
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
