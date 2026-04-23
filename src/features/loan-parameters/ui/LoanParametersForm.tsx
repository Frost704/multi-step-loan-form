import Stack from '@mui/material/Stack'

import { FormStepActions } from '@/shared/ui/FormStepActions'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'

import { useLoanParametersForm } from '../model/useLoanParametersForm'
import { LoanAmountSection } from './LoanAmountSection'
import { LoanApplicationSummary } from './LoanApplicationSummary'
import { LoanPeriodDaysSection } from './LoanPeriodDaysSection'
import { LoanSubmitDialog } from './LoanSubmitDialog'

export function LoanParametersForm() {
  const {
    onSubmit,
    onBackClick,
    isSubmitting,
    submitError,
    submitDialogStatus,
    closeSubmitDialog,
    resetApplication,
  } = useLoanParametersForm()

  return (
    <>
      <FormStepLayout
        title="Loan parameters"
        description="Choose the loan amount and term."
        onSubmit={onSubmit}
        actions={
          <FormStepActions
            submitLabel={isSubmitting ? 'Submitting...' : 'Submit application'}
            onBackClick={onBackClick}
            isBackDisabled={isSubmitting}
            isSubmitDisabled={isSubmitting}
          />
        }
      >
        <Stack spacing={1}>
          <LoanAmountSection />
          <LoanPeriodDaysSection />
          <LoanApplicationSummary />
        </Stack>
      </FormStepLayout>

      <LoanSubmitDialog
        status={submitDialogStatus}
        error={submitError}
        onSuccess={resetApplication}
        onClose={closeSubmitDialog}
      />
    </>
  )
}
