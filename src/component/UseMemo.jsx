import React from 'react'
import { useMemo, useState } from 'react'

const UseMemo = () => {
    const[count, setCount] = useState(0)
    const expensiveCalculation = useMemo(() => {
        console.log('Performing expensive calculation...')
        return count * 1000
    }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default UseMemo
