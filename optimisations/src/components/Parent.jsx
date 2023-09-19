import React, { useState, useCallback } from 'react'
import AgeShower from './AgeShower'
import Button from './Button'

export function Parent() {
    const [mithunAge, setMithunAge] = useState(10)
    const [dencyAge, setDencyAge] = useState(20)

    const incrementMithun = useCallback(() => {
        setMithunAge(mithunAge + 1)
    }, [mithunAge])

     const incrementDency = useCallback(() => {
        setDencyAge(dencyAge + 1)
     }, [dencyAge])

     console.log('parent component');

  return (
    <div>
        <div>
            <AgeShower name={'mithun'} age={mithunAge} />
            <Button name={'mithun'} action={incrementMithun} />
        </div>
        <div>
            <AgeShower name={'dency'} age={dencyAge} />
            <Button name={'dency'} action={incrementDency} />
        </div>
    </div>
  )
}

