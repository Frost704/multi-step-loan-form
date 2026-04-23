import { useApplicationFormStore } from '@/entities/application'

import {
  LOAN_TERM_MARKS,
  LOAN_TERM_MAX,
  LOAN_TERM_MIN,
  LOAN_TERM_PRESETS,
  LOAN_TERM_STEP,
} from '../model/loan-parameters.constants'
import { LoanParameterSection } from './LoanParameterSection'

export function LoanPeriodDaysSection() {
  const periodDays = useApplicationFormStore(s => s.formData.periodDays)
  const updateFormData = useApplicationFormStore(s => s.updateFormData)

  return (
    <LoanParameterSection
      title="Loan term"
      value={periodDays}
      onChange={v => updateFormData({ periodDays: v })}
      min={LOAN_TERM_MIN}
      max={LOAN_TERM_MAX}
      step={LOAN_TERM_STEP}
      marks={LOAN_TERM_MARKS}
      presets={LOAN_TERM_PRESETS}
      valueUnit="days"
    />
  )
}
