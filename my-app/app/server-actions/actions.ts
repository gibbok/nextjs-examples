'use server'

import { revalidatePath } from 'next/cache'

export async function createComment(formData: FormData) {
  await fetch('http://localhost:3001/comment', {
    method: 'POST',
    body: formData,
  })

  revalidatePath('server-actions')
}
