import { z } from 'zod'

import { ADDRESS_TEXT_FIELD_MAX_LENGTH } from './address-work.constants'

export const addressWorkSchema = z.object({
  placeOfWork: z.string().min(1, 'Place of work is required'),
  address: z
    .string()
    .trim()
    .min(1, 'Address is required')
    .max(
      ADDRESS_TEXT_FIELD_MAX_LENGTH,
      `Address must be at most ${ADDRESS_TEXT_FIELD_MAX_LENGTH} characters`,
    ),
})

export type AddressWorkFormValues = z.infer<typeof addressWorkSchema>
