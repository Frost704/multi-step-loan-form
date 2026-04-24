import { describe, expect, it } from 'vitest'

import { NAME_TEXT_FIELD_MAX_LENGTH, PHONE_FIELD_MAX_LENGTH } from './personal-info.constants'
import { personalInfoSchema } from './personal-info.schema'

describe('personalInfoSchema', () => {
  it('accepts valid personal info', () => {
    const result = personalInfoSchema.safeParse({
      phone: '0123456789',
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
    })

    expect(result.success).toBe(true)
  })

  it('rejects phone that does not start with 0', () => {
    const result = personalInfoSchema.safeParse({
      phone: '1123456789',
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
    })

    expect(result.success).toBe(false)
    expect(result.error?.issues[0]?.message).toContain('start with 0')
  })

  it('rejects non-digit phone', () => {
    const result = personalInfoSchema.safeParse({
      phone: '0abc456789',
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
    })

    expect(result.success).toBe(false)
    expect(result.error?.issues[0]?.message).toContain('digits only')
  })

  it('rejects overlong first name', () => {
    const result = personalInfoSchema.safeParse({
      phone: '0123456789',
      firstName: 'a'.repeat(NAME_TEXT_FIELD_MAX_LENGTH + 1),
      lastName: 'Doe',
      gender: 'male',
    })

    expect(result.success).toBe(false)
    expect(result.error?.issues[0]?.message).toContain(String(NAME_TEXT_FIELD_MAX_LENGTH))
  })

  it('rejects invalid phone length', () => {
    const result = personalInfoSchema.safeParse({
      phone: '0123',
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
    })

    expect(result.success).toBe(false)
    expect(result.error?.issues[0]?.message).toContain(String(PHONE_FIELD_MAX_LENGTH))
  })
})
