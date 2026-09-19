import React from 'react'

const Toggle = () => {
    const [isVisible, setIsVisible] = React.useState(false)
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This is the content to toggle.</p>}
      
    </div>
  )
}

export default Toggle
