import { useApplicationFormStore } from '@/entities/application'
import { en } from '@/shared/i18n/en'

import {
  LOAN_AMOUNT_MARKS,
  LOAN_AMOUNT_MAX,
  LOAN_AMOUNT_MIN,
  LOAN_AMOUNT_PRESETS,
  LOAN_AMOUNT_STEP,
} from '../model/loan-parameters.constants'
import { LoanParameterSection } from './LoanParameterSection'

type LoanAmountSectionProps = {
  error?: string
  onClearError?: () => void
}

export function LoanAmountSection({ error, onClearError }: LoanAmountSectionProps) {
  const amount = useApplicationFormStore(s => s.formData.amount)
  const updateFormData = useApplicationFormStore(s => s.updateFormData)

  const handleChange = (value: number) => {
    updateFormData({ amount: value })

    if (error) {
      onClearError?.()
    }
  }

  return (
    <LoanParameterSection
      title={en.loanParameters.loanAmount}
      value={amount}
      onChange={handleChange}
      min={LOAN_AMOUNT_MIN}
      max={LOAN_AMOUNT_MAX}
      step={LOAN_AMOUNT_STEP}
      marks={LOAN_AMOUNT_MARKS}
      presets={LOAN_AMOUNT_PRESETS}
      valuePrefix="$"
      error={error}
    />
  )
}
