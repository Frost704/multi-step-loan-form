import {
  NAME_TEXT_FIELD_MAX_LENGTH,
  PHONE_FIELD_MAX_LENGTH,
} from '@/features/personal-info/model/personal-info.constants'
import { z } from 'zod'

export const personalInfoSchema = z.object({
  phone: z
    .string()
    .min(1, 'Phone is required')
    .regex(/^\d+$/, 'Phone must contain digits only')
    .startsWith('0', 'Phone must start with 0')
    .length(PHONE_FIELD_MAX_LENGTH, `Phone must contain exactly ${PHONE_FIELD_MAX_LENGTH} digits`),
  firstName: z
    .string()
    .trim()
    .min(1, 'First name is required')
    .max(
      NAME_TEXT_FIELD_MAX_LENGTH,
      `First name must be at most ${NAME_TEXT_FIELD_MAX_LENGTH} characters`,
    ),
  lastName: z
    .string()
    .trim()
    .min(1, 'Last name is required')
    .max(
      NAME_TEXT_FIELD_MAX_LENGTH,
      `Last name must be at most ${NAME_TEXT_FIELD_MAX_LENGTH} characters`,
    ),
  gender: z.enum(['male', 'female'], {
    message: 'Gender is required',
  }),
})

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>
