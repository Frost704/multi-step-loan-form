import { renderHook, act } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type * as ReactRouterDom from 'react-router-dom'

import { APPLICATION_DEFAULTS } from '@/entities/application'
import { useApplicationFormStore } from '@/entities/application'
import { APP_ROUTES } from '@/shared/constants/routes'

import { useAddressWorkForm } from './useAddressWorkForm'

const mockNavigate = vi.fn()
const mockUsePlaceOfWorkOptions = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual: typeof ReactRouterDom = await vi.importActual('react-router-dom')

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

vi.mock('./usePlaceOfWorkOptions', () => ({
  usePlaceOfWorkOptions: () =>
    mockUsePlaceOfWorkOptions() as {
      data?: Array<{ value: string; label: string }>
      isLoading: boolean
      isError: boolean
      refetch: () => Promise<unknown>
    },
}))

describe('useAddressWorkForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    sessionStorage.clear()
    useApplicationFormStore.setState({
      formData: {
        ...APPLICATION_DEFAULTS,
        address: 'Main street',
        placeOfWork: 'banking',
      },
    })
  })

  it('submits values and navigates to loan parameters', () => {
    mockUsePlaceOfWorkOptions.mockReturnValue({
      data: [{ value: 'banking', label: 'Banking' }],
      isLoading: false,
      isError: false,
      refetch: vi.fn(),
    })

    const { result } = renderHook(() => useAddressWorkForm())

    act(() => {
      result.current.onSubmit({
        address: 'Updated address',
        placeOfWork: 'banking',
      })
    })

    expect(useApplicationFormStore.getState().formData.address).toBe('Updated address')
    expect(mockNavigate).toHaveBeenCalledWith(APP_ROUTES.loanParameters)
  })

  it('keeps stored place of work when option exists', () => {
    mockUsePlaceOfWorkOptions.mockReturnValue({
      data: [{ value: 'banking', label: 'Banking' }],
      isLoading: false,
      isError: false,
      refetch: vi.fn(),
    })

    const { result } = renderHook(() => useAddressWorkForm())

    act(() => {
      result.current.onBackClick()
    })

    expect(useApplicationFormStore.getState().formData.placeOfWork).toBe('banking')
    expect(mockNavigate).toHaveBeenCalledWith(APP_ROUTES.personalInfo)
  })

  it('clears invalid stored place of work when option list does not contain it', () => {
    mockUsePlaceOfWorkOptions.mockReturnValue({
      data: [{ value: 'retail', label: 'Retail' }],
      isLoading: false,
      isError: false,
      refetch: vi.fn(),
    })

    const { result } = renderHook(() => useAddressWorkForm())

    act(() => {
      result.current.onBackClick()
    })

    expect(useApplicationFormStore.getState().formData.placeOfWork).toBe('')
  })

  it('clears place of work on back when options failed to load', () => {
    mockUsePlaceOfWorkOptions.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      refetch: vi.fn(),
    })

    const { result } = renderHook(() => useAddressWorkForm())

    act(() => {
      result.current.onBackClick()
    })

    expect(useApplicationFormStore.getState().formData.placeOfWork).toBe('')
  })

  it('exposes retry function that calls refetch', () => {
    const refetch = vi.fn().mockResolvedValue(undefined)

    mockUsePlaceOfWorkOptions.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      refetch,
    })

    const { result } = renderHook(() => useAddressWorkForm())

    act(() => {
      result.current.refetchOptions()
    })

    expect(refetch).toHaveBeenCalled()
  })
})
