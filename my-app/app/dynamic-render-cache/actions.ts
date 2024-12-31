'use server'

import { revalidatePath } from 'next/cache'

export async function revalidateRouteCache() {
  revalidatePath('/dynamic-render-cache')
}
