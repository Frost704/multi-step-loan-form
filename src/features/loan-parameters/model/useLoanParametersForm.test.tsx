import { renderHook, act } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type * as ReactRouterDom from 'react-router-dom'

import { APPLICATION_DEFAULTS, useApplicationFormStore } from '@/entities/application'
import { APP_ROUTES } from '@/shared/constants/routes'
import { en, submitErrors } from '@/shared/i18n/en'

import { HttpError } from '../api/submitLoanApplication'
import { useLoanParametersForm } from './useLoanParametersForm'

const mockNavigate = vi.fn()
const mockUseSubmitLoanApplication = vi.fn()
const mockMutate = vi.fn()
const mockReset = vi.fn()

type SubmitCallbacks = {
  onSuccess: () => void
  onError: (error: Error) => void
}

vi.mock('react-router-dom', async () => {
  const actual: typeof ReactRouterDom = await vi.importActual('react-router-dom')
  return { ...actual, useNavigate: () => mockNavigate }
})

vi.mock('./useSubmitLoanApplication', () => ({
  useSubmitLoanApplication: () =>
    mockUseSubmitLoanApplication() as {
      mutate: (payload: { firstName: string; lastName: string }, callbacks: SubmitCallbacks) => void
      isPending: boolean
      error: Error | null
      reset: () => void
    },
}))

describe('useLoanParametersForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    sessionStorage.clear()
    useApplicationFormStore.setState({
      formData: { ...APPLICATION_DEFAULTS, firstName: 'John', lastName: 'Doe' },
    })
    mockUseSubmitLoanApplication.mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      error: null,
      reset: mockReset,
    })
  })

  it('submits applicant name through mutation', () => {
    const { result } = renderHook(() => useLoanParametersForm())

    act(() => result.current.onSubmit({ preventDefault: vi.fn() }))

    expect(mockReset).toHaveBeenCalled()
    const [payload, callbacks] = mockMutate.mock.calls[0] as [
      { firstName: string; lastName: string },
      SubmitCallbacks,
    ]
    expect(payload).toEqual({ firstName: 'John', lastName: 'Doe' })
    expect(callbacks.onSuccess).toEqual(expect.any(Function))
    expect(callbacks.onError).toEqual(expect.any(Function))
  })

  it('opens success dialog when mutation succeeds', () => {
    mockMutate.mockImplementation((_: unknown, options: SubmitCallbacks) => options.onSuccess())
    const { result } = renderHook(() => useLoanParametersForm())

    act(() => result.current.onSubmit({ preventDefault: vi.fn() }))

    expect(result.current.submitDialogStatus).toBe('success')
  })

  it('opens error dialog when mutation fails', () => {
    mockMutate.mockImplementation((_: unknown, options: SubmitCallbacks) =>
      options.onError(new Error('boom')),
    )
    const { result } = renderHook(() => useLoanParametersForm())

    act(() => result.current.onSubmit({ preventDefault: vi.fn() }))

    expect(result.current.submitDialogStatus).toBe('error')
  })

  it('blocks submit and exposes validation errors when loan parameters are invalid', () => {
    useApplicationFormStore.setState({
      formData: {
        ...APPLICATION_DEFAULTS,
        firstName: 'John',
        lastName: 'Doe',
        amount: 9999,
        periodDays: 99,
      },
    })
    const { result } = renderHook(() => useLoanParametersForm())

    act(() => result.current.onSubmit({ preventDefault: vi.fn() }))

    expect(mockMutate).not.toHaveBeenCalled()
    expect(result.current.validationErrors).toEqual({
      amount: en.loanParameters.errors.amountInvalid,
      periodDays: en.loanParameters.errors.termInvalid,
    })
  })

  it('clears a specific validation error', () => {
    useApplicationFormStore.setState({
      formData: { ...APPLICATION_DEFAULTS, firstName: 'John', lastName: 'Doe', amount: 9999 },
    })
    const { result } = renderHook(() => useLoanParametersForm())

    act(() => result.current.onSubmit({ preventDefault: vi.fn() }))
    act(() => result.current.clearValidationError('amount'))

    expect(result.current.validationErrors.amount).toBeUndefined()
  })

  it('does not show errors before submit is attempted', () => {
    useApplicationFormStore.setState({
      formData: { ...APPLICATION_DEFAULTS, firstName: 'John', lastName: 'Doe', amount: 9999 },
    })
    const { result } = renderHook(() => useLoanParametersForm())

    expect(result.current.validationErrors).toEqual({})
  })

  it('maps server errors to user-friendly message', () => {
    mockUseSubmitLoanApplication.mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      error: new HttpError(500),
      reset: mockReset,
    })
    const { result } = renderHook(() => useLoanParametersForm())

    expect(result.current.submitError).toBe(submitErrors.serverError)
  })

  it('maps non-server HttpError to generic message', () => {
    mockUseSubmitLoanApplication.mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      error: new HttpError(400),
      reset: mockReset,
    })
    const { result } = renderHook(() => useLoanParametersForm())

    expect(result.current.submitError).toBe(submitErrors.generic)
  })

  it('navigates back to address work', () => {
    const { result } = renderHook(() => useLoanParametersForm())

    act(() => result.current.onBackClick())

    expect(mockNavigate).toHaveBeenCalledWith(APP_ROUTES.addressWork)
  })

  it('resetApplication clears store and navigates to root', () => {
    useApplicationFormStore.getState().updateFormData({ firstName: 'Alice', lastName: 'Smith' })
    const { result } = renderHook(() => useLoanParametersForm())

    act(() => result.current.resetApplication())

    expect(mockNavigate).toHaveBeenCalledWith(APP_ROUTES.root, { replace: true })
    expect(useApplicationFormStore.getState().formData).toEqual(APPLICATION_DEFAULTS)
    expect(mockReset).toHaveBeenCalled()
  })
})
