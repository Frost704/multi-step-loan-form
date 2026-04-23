import { useApplicationFormStore } from '@/entities/application'

import {
  LOAN_AMOUNT_MARKS,
  LOAN_AMOUNT_MAX,
  LOAN_AMOUNT_MIN,
  LOAN_AMOUNT_PRESETS,
  LOAN_AMOUNT_STEP,
} from '../model/loan-parameters.constants'
import { LoanParameterSection } from './LoanParameterSection'

export function LoanAmountSection() {
  const amount = useApplicationFormStore(s => s.formData.amount)
  const updateFormData = useApplicationFormStore(s => s.updateFormData)

  return (
    <LoanParameterSection
      title="Loan amount"
      value={amount}
      onChange={v => updateFormData({ amount: v })}
      min={LOAN_AMOUNT_MIN}
      max={LOAN_AMOUNT_MAX}
      step={LOAN_AMOUNT_STEP}
      marks={LOAN_AMOUNT_MARKS}
      presets={LOAN_AMOUNT_PRESETS}
      valuePrefix="$"
    />
  )
}
