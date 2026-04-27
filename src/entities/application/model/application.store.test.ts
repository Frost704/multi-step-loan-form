import { beforeEach, describe, expect, it } from 'vitest'

import { APPLICATION_DEFAULTS, LOAN_AMOUNT_MIN, LOAN_TERM_MIN } from './defaults'
import { useApplicationFormStore } from './application.store'

const STORAGE_KEY = 'loan-application-draft'

describe('application store', () => {
  beforeEach(() => {
    sessionStorage.clear()
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

  it('keeps valid fields when persisted amount is out of range', async () => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        state: {
          formData: {
            ...APPLICATION_DEFAULTS,
            firstName: 'John',
            lastName: 'Doe',
            phone: '0123456789',
            gender: 'male',
            address: 'Main',
            placeOfWork: 'banking',
            amount: 99999,
            periodDays: 14,
          },
        },
        version: 0,
      }),
    )

    await useApplicationFormStore.persist.rehydrate()

    expect(useApplicationFormStore.getState().formData).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      phone: '0123456789',
      gender: 'male',
      address: 'Main',
      placeOfWork: 'banking',
      amount: LOAN_AMOUNT_MIN,
      periodDays: 14,
    })
  })

  it('falls back to defaults when persisted blob is malformed', async () => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ state: null, version: 0 }))

    await useApplicationFormStore.persist.rehydrate()

    expect(useApplicationFormStore.getState().formData).toEqual(APPLICATION_DEFAULTS)
  })

  it('clamps amount that is not aligned to the loan amount step', async () => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        state: {
          formData: {
            ...APPLICATION_DEFAULTS,
            firstName: 'John',
            amount: 350,
          },
        },
        version: 0,
      }),
    )

    await useApplicationFormStore.persist.rehydrate()

    const { formData } = useApplicationFormStore.getState()
    expect(formData.firstName).toBe('John')
    expect(formData.amount).toBe(LOAN_AMOUNT_MIN)
  })

  it('clamps invalid period days while keeping the rest of the form', async () => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        state: {
          formData: {
            ...APPLICATION_DEFAULTS,
            firstName: 'Jane',
            periodDays: 1.5,
          },
        },
        version: 0,
      }),
    )

    await useApplicationFormStore.persist.rehydrate()

    const { formData } = useApplicationFormStore.getState()
    expect(formData.firstName).toBe('Jane')
    expect(formData.periodDays).toBe(LOAN_TERM_MIN)
  })
})
