'use server'

import { revalidatePath } from 'next/cache'

// This a server action, is a function which will be accessible via the client.
// Next.js under the hook will make a POST request.
export async function createComment(formData: FormData) {
  await fetch('http://localhost:3001/comment', {
    method: 'POST',
    body: formData,
  })

  revalidatePath('/server-actions')
}