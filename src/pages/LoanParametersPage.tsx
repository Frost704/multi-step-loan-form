import Stack from '@mui/material/Stack'

import { useLoanParametersForm } from '@/features/loan-parameters/model/useLoanParametersForm'
import { LoanAmountSection } from '@/features/loan-parameters/ui/LoanAmountSection'
import { LoanApplicationSummary } from '@/features/loan-parameters/ui/LoanApplicationSummary'
import { LoanPeriodDaysSection } from '@/features/loan-parameters/ui/LoanPeriodDaysSection'
import { LoanSubmitDialog } from '@/features/loan-parameters/ui/LoanSubmitDialog'
import { en } from '@/shared/i18n/en'
import { FormStepActions } from '@/shared/ui/FormStepActions'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'

const t = en.loanParameters

export default function LoanParametersPage() {
  const {
    onSubmit,
    onBackClick,
    isSubmitting,
    submitError,
    submitDialogStatus,
    validationErrors,
    clearValidationError,
    closeSubmitDialog,
    resetApplication,
  } = useLoanParametersForm()

  return (
    <>
      <FormStepLayout
        title={t.title}
        description={t.description}
        onSubmit={onSubmit}
        actions={
          <FormStepActions
            submitLabel={isSubmitting ? t.submitting : t.submit}
            onBackClick={onBackClick}
            isBackDisabled={isSubmitting}
            isSubmitDisabled={isSubmitting}
          />
        }
      >
        <Stack spacing={3}>
          <LoanAmountSection
            error={validationErrors.amount}
            onClearError={() => clearValidationError('amount')}
          />
          <LoanPeriodDaysSection
            error={validationErrors.periodDays}
            onClearError={() => clearValidationError('periodDays')}
          />
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
