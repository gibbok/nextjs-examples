'use client'

import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={handleClick}
        className='className="bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"'
      >
        Increment
      </button>
    </div>
  )
}

export default Counter
