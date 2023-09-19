import React, { memo } from 'react'

function Button({name, action}) {
console.log('button component', action)
  return (
    <button onClick={action}>increment {name}</button>
  )
}

export default memo(Button)
// functions can't be memoized
