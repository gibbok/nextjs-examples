'use client'

import { revalidateRouteCache } from './actions'

export function ButtonInvalidate() {
  return (
    <button
      onClick={() => {
        revalidateRouteCache()
      }}
      className="bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
    >
      re-invalid cache
    </button>
  )
}
