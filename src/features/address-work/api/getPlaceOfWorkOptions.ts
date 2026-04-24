import { z } from 'zod'

const PLACE_OF_WORK_OPTIONS_URL = 'https://dummyjson.com/products/category-list'

const placeOfWorkOptionsSchema = z.array(z.string())

export async function getPlaceOfWorkOptions(): Promise<string[]> {
  const response = await fetch(PLACE_OF_WORK_OPTIONS_URL)

  if (!response.ok) {
    throw new Error('Failed to load place of work options')
  }

  const data: unknown = await response.json()
  const result = placeOfWorkOptionsSchema.safeParse(data)

  if (!result.success) {
    throw new Error('Invalid place of work options response')
  }
  return result.data
}
