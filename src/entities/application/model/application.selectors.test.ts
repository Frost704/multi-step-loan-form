import { describe, expect, it } from 'vitest'

import { isAddressWorkComplete, isPersonalInfoComplete } from './application.selectors'
import { APPLICATION_DEFAULTS } from './defaults'

describe('application selectors', () => {
  it('detects completed personal info', () => {
    expect(
      isPersonalInfoComplete({
        ...APPLICATION_DEFAULTS,
        firstName: 'John',
        lastName: 'Doe',
        phone: '0123456789',
        gender: 'male',
      }),
    ).toBe(true)
  })

  it('detects incomplete personal info', () => {
    expect(
      isPersonalInfoComplete({
        ...APPLICATION_DEFAULTS,
        firstName: 'John',
        lastName: '',
      }),
    ).toBe(false)
  })

  it('detects completed address/work step', () => {
    expect(
      isAddressWorkComplete({
        ...APPLICATION_DEFAULTS,
        address: '221B Baker Street',
        placeOfWork: 'banking',
      }),
    ).toBe(true)
  })

  it('detects incomplete address/work step', () => {
    expect(
      isAddressWorkComplete({
        ...APPLICATION_DEFAULTS,
        address: '',
        placeOfWork: 'banking',
      }),
    ).toBe(false)
  })
})
