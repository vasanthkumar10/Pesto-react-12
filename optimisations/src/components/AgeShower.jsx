import React, { memo } from 'react'

function AgeShower({name, age}) {
    console.log('in age shower', name, age);
  return (
    <h2>{name} - {age}</h2>
  )
}

export default memo(AgeShower) // pure component
// it will change only when its prop changes