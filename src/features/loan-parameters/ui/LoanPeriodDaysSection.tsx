import { useApplicationFormStore } from '@/entities/application'
import { en } from '@/shared/i18n/en'

import {
  LOAN_TERM_MARKS,
  LOAN_TERM_MAX,
  LOAN_TERM_MIN,
  LOAN_TERM_PRESETS,
  LOAN_TERM_STEP,
} from '../model/loan-parameters.constants'
import { LoanParameterSection } from './LoanParameterSection'

type LoanPeriodDaysSectionProps = {
  error?: string
  onClearError?: () => void
}

export function LoanPeriodDaysSection({ error, onClearError }: LoanPeriodDaysSectionProps) {
  const periodDays = useApplicationFormStore(s => s.formData.periodDays)
  const updateFormData = useApplicationFormStore(s => s.updateFormData)

  const handleChange = (value: number) => {
    updateFormData({ periodDays: value })

    if (error) {
      onClearError?.()
    }
  }

  return (
    <LoanParameterSection
      title={en.loanParameters.loanTerm}
      value={periodDays}
      onChange={handleChange}
      min={LOAN_TERM_MIN}
      max={LOAN_TERM_MAX}
      step={LOAN_TERM_STEP}
      marks={LOAN_TERM_MARKS}
      presets={LOAN_TERM_PRESETS}
      valueUnit={en.loanParameters.days}
      error={error}
    />
  )
}
