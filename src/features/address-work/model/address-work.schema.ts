import { z } from 'zod'

export const addressWorkSchema = z.object({
  placeOfWork: z.string().min(1, 'Place of work is required'),
  address: z
    .string()
    .trim()
    .min(1, 'Address is required')
    .max(100, 'Address must be at most 100 characters'),
})

export type AddressWorkFormValues = z.infer<typeof addressWorkSchema>
