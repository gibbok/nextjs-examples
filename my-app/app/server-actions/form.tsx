'use client'

import { createComment } from './actions'

export function FormCreateComment() {
  return (
    <form
      action={createComment}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      encType="multipart/form-data"
    >
      <input
        type="text"
        name="name"
        placeholder="your name"
        defaultValue="user 1"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="text"
        name="comment"
        placeholder="your comment"
        defaultValue="positive comment"
        className="my-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create comment
        </button>
      </div>
    </form>
  )
}
