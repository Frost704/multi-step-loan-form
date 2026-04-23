import { type Control, useWatch } from 'react-hook-form'

import type { LoanParametersFormValues } from '../model/loan-parameters.schema'
import {
  LoanSummaryApplicant,
  LoanSummaryAside,
  LoanSummaryBody,
  LoanSummaryCard,
  LoanSummaryContent,
  LoanSummaryLabel,
  LoanSummaryMeta,
  LoanSummaryValue,
} from './LoanApplicationSummary.styles'

type LoanApplicationSummaryProps = {
  control: Control<LoanParametersFormValues>
  firstName: string
  lastName: string
}

export function LoanApplicationSummary({
  control,
  firstName,
  lastName,
}: LoanApplicationSummaryProps) {
  const amount = useWatch({ control, name: 'amount' })
  const periodDays = useWatch({ control, name: 'periodDays' })

  return (
    <LoanSummaryCard>
      <LoanSummaryContent>
        <LoanSummaryApplicant>
          <LoanSummaryLabel>Applicant</LoanSummaryLabel>
          <LoanSummaryBody>
            {firstName} {lastName}
          </LoanSummaryBody>
        </LoanSummaryApplicant>

        <LoanSummaryAside>
          <LoanSummaryLabel>Summary</LoanSummaryLabel>
          <LoanSummaryValue>
            ${amount} <LoanSummaryMeta>· {periodDays} d</LoanSummaryMeta>
          </LoanSummaryValue>
        </LoanSummaryAside>
      </LoanSummaryContent>
    </LoanSummaryCard>
  )
}
