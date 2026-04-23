import Stack from '@mui/material/Stack'
import { Controller } from 'react-hook-form'

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
import { useLoanParametersForm } from '../model/useLoanParametersForm'
import { LoanApplicationSummary } from './LoanApplicationSummary'
import { LoanParameterSection } from './LoanParameterSection'
import { LoanSubmitDialog } from './LoanSubmitDialog'
import { FormStepActions } from '@/shared/ui/FormStepActions'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'

export function LoanParametersForm() {
  const {
    control,
    handleSubmit,
    onSubmit,
    onBackClick,
    isSubmitting,
    submitError,
    submitDialogStatus,
    closeSubmitDialog,
    resetApplication,
    firstName,
    lastName,
    amount,
    periodDays,
  } = useLoanParametersForm()

  return (
    <>
      <FormStepLayout
        title="Loan parameters"
        description="Choose the loan amount and term."
        onSubmit={handleSubmit(onSubmit)}
        actions={
          <FormStepActions
            submitLabel={isSubmitting ? 'Submitting...' : 'Submit application'}
            onBackClick={onBackClick}
            isBackDisabled={isSubmitting}
            isSubmitDisabled={isSubmitting}
          />
        }
      >
        <Stack spacing={3.5}>
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <LoanParameterSection
                title="Loan amount"
                value={field.value}
                onChange={field.onChange}
                min={LOAN_AMOUNT_MIN}
                max={LOAN_AMOUNT_MAX}
                step={LOAN_AMOUNT_STEP}
                marks={LOAN_AMOUNT_MARKS}
                presets={LOAN_AMOUNT_PRESETS}
                valuePrefix="$"
              />
            )}
          />

          <Controller
            name="periodDays"
            control={control}
            render={({ field }) => (
              <LoanParameterSection
                title="Loan term"
                value={field.value}
                onChange={field.onChange}
                min={LOAN_TERM_MIN}
                max={LOAN_TERM_MAX}
                step={LOAN_TERM_STEP}
                marks={LOAN_TERM_MARKS}
                presets={LOAN_TERM_PRESETS}
                valueUnit="days"
              />
            )}
          />

          <LoanApplicationSummary control={control} firstName={firstName} lastName={lastName} />
        </Stack>
      </FormStepLayout>

      <LoanSubmitDialog
        status={submitDialogStatus}
        error={submitError}
        firstName={firstName}
        lastName={lastName}
        amount={amount}
        periodDays={periodDays}
        onSuccess={resetApplication}
        onClose={closeSubmitDialog}
      />
    </>
  )
}
