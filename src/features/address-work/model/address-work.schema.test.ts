import { describe, expect, it } from 'vitest'

import { ADDRESS_TEXT_FIELD_MAX_LENGTH } from './address-work.constants'
import { addressWorkSchema } from './address-work.schema'

describe('addressWorkSchema', () => {
  it('accepts valid address and place of work', () => {
    const result = addressWorkSchema.safeParse({
      placeOfWork: 'banking',
      address: '221B Baker Street',
    })

    expect(result.success).toBe(true)
  })

  it('rejects empty place of work', () => {
    const result = addressWorkSchema.safeParse({
      placeOfWork: '',
      address: '221B Baker Street',
    })

    expect(result.success).toBe(false)
    expect(result.error?.issues[0]?.message).toContain('Place of work is required')
  })

  it('rejects overlong address', () => {
    const result = addressWorkSchema.safeParse({
      placeOfWork: 'banking',
      address: 'a'.repeat(ADDRESS_TEXT_FIELD_MAX_LENGTH + 1),
    })

    expect(result.success).toBe(false)
    expect(result.error?.issues[0]?.message).toContain(String(ADDRESS_TEXT_FIELD_MAX_LENGTH))
  })
})
