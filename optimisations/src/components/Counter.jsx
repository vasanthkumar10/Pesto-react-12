import React, { useState, lazy, Suspense } from 'react'
const ChildCounter = lazy(() => import('./ChildCounter'))

export default function Counter() {
    const [showCounter, setSchowCounter] = useState(false)
    console.log('counter component');
  return (
    <div>
        <h2>Counter</h2>
        {showCounter &&
        <Suspense fallback={<h1>Counter fallback....</h1>}>
            <ChildCounter />
        </Suspense>
        }
        <button onClick={() => setSchowCounter(!showCounter)}>toggle</button>
    </div>
  )
}
