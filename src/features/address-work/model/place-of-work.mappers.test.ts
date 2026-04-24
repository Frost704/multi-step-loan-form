import { describe, expect, it } from 'vitest'

import { mapPlaceOfWorkOptions } from './place-of-work.mappers'

describe('mapPlaceOfWorkOptions', () => {
  it('maps category strings to select options', () => {
    expect(mapPlaceOfWorkOptions(['consumer-electronics', 'home-decoration'])).toEqual([
      { value: 'consumer-electronics', label: 'Consumer Electronics' },
      { value: 'home-decoration', label: 'Home Decoration' },
    ])
  })
})
