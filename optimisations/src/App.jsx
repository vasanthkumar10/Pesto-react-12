import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './components/Home'
import { Parent } from "./components/Parent";

// const Home = lazy(() => import('./components/Home'))
// const Counter = lazy(() => import('./components/Counter'))

function App() {
  return (
    // <BrowserRouter>
    //   <Suspense fallback={<h1>lazy loading.....</h1>}>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/counter" element={<Counter />} />
    //     </Routes>
    //   </Suspense>
    // </BrowserRouter>
    <div>
      <Parent />
    </div>
  );
}

export default App;
