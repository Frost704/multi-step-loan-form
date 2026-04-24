import { z } from 'zod'

import { en } from '@/shared/i18n/en'
import { ADDRESS_TEXT_FIELD_MAX_LENGTH } from './address-work.constants'

const t = en.addressWork.errors

export const addressWorkSchema = z.object({
  placeOfWork: z.string().min(1, t.placeOfWorkRequired),
  address: z
    .string()
    .trim()
    .min(1, t.addressRequired)
    .max(ADDRESS_TEXT_FIELD_MAX_LENGTH, t.addressMaxLength(ADDRESS_TEXT_FIELD_MAX_LENGTH)),
})

export type AddressWorkFormValues = z.infer<typeof addressWorkSchema>
