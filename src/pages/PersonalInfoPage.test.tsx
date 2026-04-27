import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import PersonalInfoPage from './PersonalInfoPage'

type UsePersonalInfoFormMock = {
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
}

const mockUsePersonalInfoForm = vi.fn<() => UsePersonalInfoFormMock>()

vi.mock('@/features/personal-info', () => ({
  usePersonalInfoForm: () => mockUsePersonalInfoForm(),
  PhoneField: () => <div>Phone field</div>,
  GENDER_OPTIONS: [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ],
  NAME_TEXT_FIELD_MAX_LENGTH: 35,
}))

vi.mock('@/shared/form/ControlledSelectField', () => ({
  ControlledSelectField: () => <div>Gender field</div>,
}))

const baseFormReturn: UsePersonalInfoFormMock = {
  control: {},
  register: () => ({ name: 'mock', onChange: vi.fn(), onBlur: vi.fn(), ref: vi.fn() }),
  handleSubmit: (submit: (values: unknown) => void) => submit,
  errors: {},
  onSubmit: vi.fn(),
}

describe('PersonalInfoPage', () => {
  beforeEach(() => {
    mockUsePersonalInfoForm.mockReturnValue(baseFormReturn)
  })

  it('renders main step fields', () => {
    render(<PersonalInfoPage />)

    expect(screen.getByRole('heading', { name: 'Personal information' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /first name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /last name/i })).toBeInTheDocument()
    expect(screen.getByText('Phone field')).toBeInTheDocument()
    expect(screen.getByText('Gender field')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('shows field validation errors', () => {
    mockUsePersonalInfoForm.mockReturnValue({
      ...baseFormReturn,
      errors: {
        firstName: { message: 'First name is required' },
        lastName: { message: 'Last name is required' },
      },
    })
    render(<PersonalInfoPage />)

    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Last name is required')).toBeInTheDocument()
  })

  it('shows max chars helper text when there are no errors', () => {
    render(<PersonalInfoPage />)

    expect(screen.getAllByText('Maximum 35 characters')).toHaveLength(2)
  })
})
