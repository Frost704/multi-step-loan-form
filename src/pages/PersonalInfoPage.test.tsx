import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import PersonalInfoPage from './PersonalInfoPage'

const mockUsePersonalInfoForm = vi.fn()

vi.mock('@/features/personal-info/model/usePersonalInfoForm', () => ({
  usePersonalInfoForm: () =>
    mockUsePersonalInfoForm() as {
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
    },
}))

vi.mock('@/features/personal-info/ui/PhoneField', () => ({
  PhoneField: () => <div>Phone field</div>,
}))

vi.mock('@/shared/form/ControlledSelectField', () => ({
  ControlledSelectField: () => <div>Gender field</div>,
}))

describe('PersonalInfoPage', () => {
  beforeEach(() => {
    mockUsePersonalInfoForm.mockReturnValue({
      control: {},
      register: () => ({ name: 'mock', onChange: vi.fn(), onBlur: vi.fn(), ref: vi.fn() }),
      handleSubmit: (submit: (values: unknown) => void) => submit,
      errors: {},
      onSubmit: vi.fn(),
    })
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
})
