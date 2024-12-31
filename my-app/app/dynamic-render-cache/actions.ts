'use server'

import { revalidatePath } from 'next/cache'

// Example Server Action, the client component can call this function which is defined in server
export async function revalidateRouteCache() {
  revalidatePath('/dynamic-render-cache')
}
