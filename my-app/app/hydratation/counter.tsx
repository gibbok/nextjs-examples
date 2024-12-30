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
      {count > 0 ? (
        <button
          onClick={() => {
            window.alert('hello')
          }}
          className="bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
        >
          say hello
        </button>
      ) : null}
      <button
        onClick={handleClick}
        className="bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        click to increment
      </button>
    </div>
  )
}

export default Counter
