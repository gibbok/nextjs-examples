'use client'

import { useActionState } from 'react'
import { createComment, State } from './actions'

const initState: State = { status: 'INIT' }

export function FormCreateComment() {
  const [state, formAction, pending] = useActionState(createComment, initState)

  return (
    <form
      action={formAction}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <input
        type="text"
        name="name"
        placeholder="your name"
        defaultValue="Batman"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="text"
        name="comment"
        placeholder="your comment"
        defaultValue={'I love Next.js!'}
        className="my-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="flex items-center justify-between">
        <button
          disabled={pending}
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Create comment
        </button>
      </div>
      {pending ? ' Loading .... (posting to server)' : null}
      {state.status === 'OK' ? 'Form sumbitted!' : null}
    </form>
  )
}
