'use server'

import { revalidatePath } from 'next/cache'

// Example of actions
export async function revalidateRouteCache() {
  debugger
  revalidatePath('/dynamic-render-cache')
}
