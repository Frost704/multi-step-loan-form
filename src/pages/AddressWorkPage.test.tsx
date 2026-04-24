import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import AddressWorkPage from './AddressWorkPage'

const mockUseAddressWorkForm = vi.fn()

vi.mock('@/features/address-work/model/useAddressWorkForm', () => ({
  useAddressWorkForm: () =>
    mockUseAddressWorkForm() as {
      control: object
      register: () => {
        name: string
        onChange: () => void
        onBlur: () => void
        ref: () => void
      }
      handleSubmit: (submit: (values: unknown) => void) => (values: unknown) => void
      errors: Record<string, { message?: string }>
      onSubmit: () => void
      onBackClick: () => void
      placeOfWorkOptions: Array<{ value: string; label: string }>
      isOptionsLoading: boolean
      isOptionsError: boolean
      refetchOptions: () => void
    },
}))

vi.mock('@/shared/form/ControlledSelectField', () => ({
  ControlledSelectField: ({
    label,
    helperText,
    disabled,
  }: {
    label: string
    helperText?: string
    disabled?: boolean
  }) => (
    <div>
      <span>{label}</span>
      <span>{helperText}</span>
      <span>{disabled ? 'disabled' : 'enabled'}</span>
    </div>
  ),
}))

describe('AddressWorkPage', () => {
  beforeEach(() => {
    mockUseAddressWorkForm.mockReturnValue({
      control: {},
      register: () => ({ name: 'mock', onChange: vi.fn(), onBlur: vi.fn(), ref: vi.fn() }),
      handleSubmit: (submit: (values: unknown) => void) => submit,
      errors: {},
      onSubmit: vi.fn(),
      onBackClick: vi.fn(),
      placeOfWorkOptions: [{ value: 'banking', label: 'Banking' }],
      isOptionsLoading: false,
      isOptionsError: false,
      refetchOptions: vi.fn(),
    })
  })

  it('renders retry state when options loading fails', async () => {
    const refetchOptions = vi.fn()

    mockUseAddressWorkForm.mockReturnValue({
      control: {},
      register: () => ({ name: 'mock', onChange: vi.fn(), onBlur: vi.fn(), ref: vi.fn() }),
      handleSubmit: (submit: (values: unknown) => void) => submit,
      errors: {},
      onSubmit: vi.fn(),
      onBackClick: vi.fn(),
      placeOfWorkOptions: [],
      isOptionsLoading: false,
      isOptionsError: true,
      refetchOptions,
    })

    render(<AddressWorkPage />)

    expect(screen.getByText('Failed to load')).toBeInTheDocument()
    const retryButton = screen.getByRole('button', { name: 'Retry' })
    await userEvent.click(retryButton)
    expect(refetchOptions).toHaveBeenCalled()
  })

  it('renders loading helper text for place of work field', () => {
    mockUseAddressWorkForm.mockReturnValue({
      control: {},
      register: () => ({ name: 'mock', onChange: vi.fn(), onBlur: vi.fn(), ref: vi.fn() }),
      handleSubmit: (submit: (values: unknown) => void) => submit,
      errors: {},
      onSubmit: vi.fn(),
      onBackClick: vi.fn(),
      placeOfWorkOptions: [],
      isOptionsLoading: true,
      isOptionsError: false,
      refetchOptions: vi.fn(),
    })

    render(<AddressWorkPage />)

    expect(screen.getByText('loading...')).toBeInTheDocument()
    expect(screen.getByText('disabled')).toBeInTheDocument()
  })
})
