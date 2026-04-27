import { useApplicationFormStore } from '@/entities/application'
import { en } from '@/shared/i18n/en'

import {
  LOAN_AMOUNT_MARKS,
  LOAN_AMOUNT_MAX,
  LOAN_AMOUNT_MIN,
  LOAN_AMOUNT_PRESETS,
  LOAN_AMOUNT_STEP,
  LOAN_TERM_MARKS,
  LOAN_TERM_MAX,
  LOAN_TERM_MIN,
  LOAN_TERM_PRESETS,
  LOAN_TERM_STEP,
} from '../model/loan-parameters.constants'
import { LoanParameterSection } from './LoanParameterSection'

type SliderField = 'amount' | 'periodDays'

type SliderConfig = {
  title: string
  min: number
  max: number
  step: number
  marks: readonly { value: number; label: string }[]
  presets: readonly number[]
  valuePrefix?: string
  valueUnit?: string
}

const FIELD_CONFIG: Record<SliderField, SliderConfig> = {
  amount: {
    title: en.loanParameters.loanAmount,
    min: LOAN_AMOUNT_MIN,
    max: LOAN_AMOUNT_MAX,
    step: LOAN_AMOUNT_STEP,
    marks: LOAN_AMOUNT_MARKS,
    presets: LOAN_AMOUNT_PRESETS,
    valuePrefix: '$',
  },
  periodDays: {
    title: en.loanParameters.loanTerm,
    min: LOAN_TERM_MIN,
    max: LOAN_TERM_MAX,
    step: LOAN_TERM_STEP,
    marks: LOAN_TERM_MARKS,
    presets: LOAN_TERM_PRESETS,
    valueUnit: en.loanParameters.days,
  },
}

type LoanSliderSectionProps = {
  field: SliderField
  error?: string
  onClearError?: () => void
}

function LoanSliderSection({ field, error, onClearError }: LoanSliderSectionProps) {
  const value = useApplicationFormStore(s => s.formData[field])
  const updateFormData = useApplicationFormStore(s => s.updateFormData)

  const handleChange = (newValue: number) => {
    updateFormData(field === 'amount' ? { amount: newValue } : { periodDays: newValue })
    if (error) onClearError?.()
  }

  return (
    <LoanParameterSection
      value={value}
      onChange={handleChange}
      error={error}
      {...FIELD_CONFIG[field]}
    />
  )
}

type SliderSectionProps = {
  error?: string
  onClearError?: () => void
}

export function LoanAmountSection(props: SliderSectionProps) {
  return <LoanSliderSection field="amount" {...props} />
}

export function LoanPeriodDaysSection(props: SliderSectionProps) {
  return <LoanSliderSection field="periodDays" {...props} />
}
