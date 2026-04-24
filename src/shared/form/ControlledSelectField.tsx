import type { SelectOption } from '@/shared/types/select-option'
import { BaseSelectField } from '@/shared/ui/BaseSelectField'
import { Controller, type Control, type FieldPath, type FieldValues } from 'react-hook-form'

type ControlledSelectFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  label: string
  options: readonly SelectOption[]
  autoComplete?: string
  required?: boolean
  disabled?: boolean
  fullWidth?: boolean
  errorText?: string
  helperText?: string
}

export function ControlledSelectField<T extends FieldValues>({
  control,
  name,
  label,
  options,
  autoComplete,
  required,
  disabled,
  fullWidth,
  errorText,
  helperText,
}: ControlledSelectFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <BaseSelectField
          name={name}
          label={label}
          value={field.value ?? ''}
          options={options}
          onChange={field.onChange}
          error={fieldState.error?.message ?? errorText}
          autoComplete={autoComplete}
          required={required}
          helperText={helperText}
          disabled={disabled}
          fullWidth={fullWidth}
        />
      )}
    />
  )
}
