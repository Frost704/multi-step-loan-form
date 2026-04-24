import { describe, expect, it } from 'vitest'

import { formatPersonName } from './formatPersonName'

describe('formatPersonName', () => {
  it('returns full and display name when both names are present', () => {
    expect(formatPersonName('John', 'Doe')).toEqual({
      fullName: 'John Doe',
      displayName: 'John D.',
    })
  })

  it('trims incoming names', () => {
    expect(formatPersonName('  John  ', '  Doe  ')).toEqual({
      fullName: 'John Doe',
      displayName: 'John D.',
    })
  })

  it('returns first name only when last name is empty', () => {
    expect(formatPersonName('John', '   ')).toEqual({
      fullName: 'John',
      displayName: 'John',
    })
  })
})
