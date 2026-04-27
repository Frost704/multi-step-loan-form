import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import type { SubmittedSnapshot } from '../model/useLoanParametersForm'
import { LoanSubmitDialog } from './LoanSubmitDialog'

const snapshot: SubmittedSnapshot = {
  firstName: 'John',
  lastName: 'Doe',
  amount: 500,
  periodDays: 14,
}

describe('LoanSubmitDialog', () => {
  it('renders success dialog content from snapshot', () => {
    render(
      <LoanSubmitDialog
        status="success"
        error={null}
        snapshot={snapshot}
        onSuccess={vi.fn()}
        onClose={vi.fn()}
      />,
    )

    expect(screen.getByText('Congratulations!')).toBeInTheDocument()
    expect(screen.getByText('Doe John')).toBeInTheDocument()
    expect(screen.getByText('$500')).toBeInTheDocument()
    expect(screen.getByText('14 days')).toBeInTheDocument()
    expect(screen.getByText('approved')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Great!' })).toBeInTheDocument()
  })

  it('renders provided error message in error state', () => {
    render(
      <LoanSubmitDialog
        status="error"
        error="Network unavailable"
        snapshot={null}
        onSuccess={vi.fn()}
        onClose={vi.fn()}
      />,
    )

    expect(screen.getByText('Submission failed')).toBeInTheDocument()
    expect(screen.getByText('Network unavailable')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument()
  })
})
