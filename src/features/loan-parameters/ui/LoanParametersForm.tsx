import Stack from '@mui/material/Stack'

import { en } from '@/shared/i18n/en'
import { FormStepActions } from '@/shared/ui/FormStepActions'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'

import { useLoanParametersForm } from '../model/useLoanParametersForm'
import { LoanAmountSection } from './LoanAmountSection'
import { LoanApplicationSummary } from './LoanApplicationSummary'
import { LoanPeriodDaysSection } from './LoanPeriodDaysSection'
import { LoanSubmitDialog } from './LoanSubmitDialog'

const t = en.loanParameters

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
