import type {
  Control,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

export type StepFormResult<TFormValues extends FieldValues> = {
  control: Control<TFormValues>
  register: UseFormRegister<TFormValues>
  handleSubmit: UseFormHandleSubmit<TFormValues>
  errors: FieldErrors<TFormValues>
  onSubmit: SubmitHandler<TFormValues>
}

export type StepFormWithBackResult<TFormValues extends FieldValues> =
  StepFormResult<TFormValues> & {
    onBackClick: () => void
  }
