import React from 'react'
import {useEffect} from 'react'

const UseEffects = () => {
    const [count, setCount] =React.useState(0)
  useEffect(() => {
    // Side effect logic here
  }, [count])//dependencies array contains count, so this effect will run whenever count changes

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default UseEffects
