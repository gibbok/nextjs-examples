'use server'

import { revalidatePath } from 'next/cache'

// Example of actions
export async function revalidateRouteCache() {
  revalidatePath('/dynamic-render-cache')
}
