import { beforeEach, describe, expect, it } from 'vitest'

import { APPLICATION_DEFAULTS } from './defaults'
import { useApplicationFormStore } from './application.store'

describe('application store', () => {
  beforeEach(() => {
    useApplicationFormStore.setState({ formData: APPLICATION_DEFAULTS })
  })

  it('merges form patches into existing draft', () => {
    useApplicationFormStore.getState().updateFormData({
      firstName: 'John',
      amount: 500,
    })

    expect(useApplicationFormStore.getState().formData).toEqual({
      ...APPLICATION_DEFAULTS,
      firstName: 'John',
      amount: 500,
    })
  })

  it('resets draft back to defaults', () => {
    useApplicationFormStore.getState().updateFormData({
      firstName: 'John',
      lastName: 'Doe',
    })

    useApplicationFormStore.getState().resetFormData()

    expect(useApplicationFormStore.getState().formData).toEqual(APPLICATION_DEFAULTS)
  })
})
