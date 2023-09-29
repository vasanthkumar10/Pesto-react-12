import React, { useState } from 'react'

export function Counter() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    const handleCount = () => {
        setCount((prev) => prev + 1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleCount}>increment</button>

        <input 
            type="number"
            name={"count"}
            value={input} 
            onChange={(e) => setInput(Number(e.target.value))} 
        />
        <button onClick={() => setCount(input)}>set</button>
    </div>
  )
}
