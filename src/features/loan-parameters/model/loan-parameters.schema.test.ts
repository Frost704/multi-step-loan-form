import { describe, expect, it } from 'vitest'

import {
  LOAN_AMOUNT_MAX,
  LOAN_AMOUNT_MIN,
  LOAN_AMOUNT_STEP,
  LOAN_TERM_MAX,
  LOAN_TERM_MIN,
  LOAN_TERM_STEP,
} from './loan-parameters.constants'
import { loanParametersSchema } from './loan-parameters.schema'

describe('loanParametersSchema', () => {
  const validValues = {
    amount: LOAN_AMOUNT_MIN,
    periodDays: LOAN_TERM_MIN,
  }

  it('accepts valid loan parameters', () => {
    expect(loanParametersSchema.safeParse(validValues).success).toBe(true)
  })

  it('accepts max boundary values', () => {
    expect(
      loanParametersSchema.safeParse({
        amount: LOAN_AMOUNT_MAX,
        periodDays: LOAN_TERM_MAX,
      }).success,
    ).toBe(true)
  })

  it('rejects amount below min', () => {
    expect(
      loanParametersSchema.safeParse({
        ...validValues,
        amount: LOAN_AMOUNT_MIN - LOAN_AMOUNT_STEP,
      }).success,
    ).toBe(false)
  })

  it('rejects amount above max', () => {
    expect(
      loanParametersSchema.safeParse({
        ...validValues,
        amount: LOAN_AMOUNT_MAX + LOAN_AMOUNT_STEP,
      }).success,
    ).toBe(false)
  })

  it('rejects amount that does not match step', () => {
    expect(
      loanParametersSchema.safeParse({
        ...validValues,
        amount: LOAN_AMOUNT_MIN + 1,
      }).success,
    ).toBe(false)
  })

  it('rejects period below min', () => {
    expect(
      loanParametersSchema.safeParse({
        ...validValues,
        periodDays: LOAN_TERM_MIN - LOAN_TERM_STEP,
      }).success,
    ).toBe(false)
  })

  it('rejects period above max', () => {
    expect(
      loanParametersSchema.safeParse({
        ...validValues,
        periodDays: LOAN_TERM_MAX + LOAN_TERM_STEP,
      }).success,
    ).toBe(false)
  })

  it('rejects non-integer period', () => {
    expect(
      loanParametersSchema.safeParse({
        ...validValues,
        periodDays: LOAN_TERM_MIN + 0.5,
      }).success,
    ).toBe(false)
  })

  it('rejects period that does not match step', () => {
    expect(
      loanParametersSchema.safeParse({
        ...validValues,
        periodDays: LOAN_TERM_MIN + LOAN_TERM_STEP / 2,
      }).success,
    ).toBe(false)
  })

  it('rejects NaN and Infinity values', () => {
    expect(
      loanParametersSchema.safeParse({
        amount: Number.NaN,
        periodDays: LOAN_TERM_MIN,
      }).success,
    ).toBe(false)

    expect(
      loanParametersSchema.safeParse({
        amount: Infinity,
        periodDays: LOAN_TERM_MIN,
      }).success,
    ).toBe(false)

    expect(
      loanParametersSchema.safeParse({
        amount: LOAN_AMOUNT_MIN,
        periodDays: Infinity,
      }).success,
    ).toBe(false)
  })

  it('rejects non-number values', () => {
    expect(
      loanParametersSchema.safeParse({
        amount: '500',
        periodDays: LOAN_TERM_MIN,
      }).success,
    ).toBe(false)

    expect(
      loanParametersSchema.safeParse({
        amount: LOAN_AMOUNT_MIN,
        periodDays: '10',
      }).success,
    ).toBe(false)
  })
})
