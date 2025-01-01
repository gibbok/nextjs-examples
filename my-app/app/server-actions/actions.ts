'use server'

import { revalidatePath } from 'next/cache'

export type StateForm = {
  name: string
  comment: string
}

export type State = { status: number }

// This a server action, is a function which will be accessible via the client.
// Next.js under the hook will make a POST request.
export async function createComment(_prevState: State, formData: FormData) {
  try {
    await fetch('http://localhost:3001/comment', {
      method: 'POST',
      body: formData,
    })
  } catch (e) {
    console.error(e)
    return {
      status: 500,
    }
  }

  revalidatePath('/server-actions')

  return {
    status: 200,
  }
}
