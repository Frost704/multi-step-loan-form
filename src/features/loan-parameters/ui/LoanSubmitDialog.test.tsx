import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { APPLICATION_DEFAULTS } from '@/entities/application'
import { useApplicationFormStore } from '@/entities/application'
import { appTheme } from '@/app/theme'

import { LoanSubmitDialog } from './LoanSubmitDialog'

describe('LoanSubmitDialog', () => {
  beforeEach(() => {
    useApplicationFormStore.setState({
      formData: {
        ...APPLICATION_DEFAULTS,
        firstName: 'John',
        lastName: 'Doe',
        amount: 500,
        periodDays: 14,
      },
    })
  })

  it('renders success dialog content from store values', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <LoanSubmitDialog status="success" error={null} onSuccess={vi.fn()} onClose={vi.fn()} />
      </ThemeProvider>,
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
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <LoanSubmitDialog
          status="error"
          error="Network unavailable"
          onSuccess={vi.fn()}
          onClose={vi.fn()}
        />
      </ThemeProvider>,
    )

    expect(screen.getByText('Submission failed')).toBeInTheDocument()
    expect(screen.getByText('Network unavailable')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument()
  })
})
