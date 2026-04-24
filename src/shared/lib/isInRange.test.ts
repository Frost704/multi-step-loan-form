import { describe, expect, it } from 'vitest'

import { isInRange } from './isInRange'

describe('isInRange', () => {
  it('returns true when value is within range', () => {
    expect(isInRange(5, 1, 10)).toBe(true)
  })

  it('returns true when value equals min boundary', () => {
    expect(isInRange(1, 1, 10)).toBe(true)
  })

  it('returns true when value equals max boundary', () => {
    expect(isInRange(10, 1, 10)).toBe(true)
  })

  it('returns false when value is below min', () => {
    expect(isInRange(0, 1, 10)).toBe(false)
  })

  it('returns false when value is above max', () => {
    expect(isInRange(11, 1, 10)).toBe(false)
  })

  it('returns false for NaN', () => {
    expect(isInRange(Number.NaN, 1, 10)).toBe(false)
  })

  it('returns false for Infinity', () => {
    expect(isInRange(Infinity, 1, 10)).toBe(false)
  })

  it('returns false for -Infinity', () => {
    expect(isInRange(-Infinity, 1, 10)).toBe(false)
  })
})
