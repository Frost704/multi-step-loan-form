import { z } from 'zod'

import { en } from '@/shared/i18n/en'
import { NAME_TEXT_FIELD_MAX_LENGTH, PHONE_FIELD_MAX_LENGTH } from './personal-info.constants'

const t = en.personalInfo.errors

export const personalInfoSchema = z.object({
  phone: z
    .string()
    .min(1, t.phoneRequired)
    .regex(/^\d+$/, t.phoneDigitsOnly)
    .startsWith('0', t.phoneStartsWith0)
    .length(PHONE_FIELD_MAX_LENGTH, t.phoneExactLength(PHONE_FIELD_MAX_LENGTH)),
  firstName: z
    .string()
    .trim()
    .min(1, t.firstNameRequired)
    .max(NAME_TEXT_FIELD_MAX_LENGTH, t.firstNameMaxLength(NAME_TEXT_FIELD_MAX_LENGTH)),
  lastName: z
    .string()
    .trim()
    .min(1, t.lastNameRequired)
    .max(NAME_TEXT_FIELD_MAX_LENGTH, t.lastNameMaxLength(NAME_TEXT_FIELD_MAX_LENGTH)),
  gender: z.enum(['male', 'female'], { message: t.genderRequired }),
})

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>
