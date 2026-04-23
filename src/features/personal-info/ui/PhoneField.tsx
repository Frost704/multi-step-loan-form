import TextField from '@mui/material/TextField'
import { Controller, type Control, type FieldPath, type FieldValues } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'

type PhoneFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  format: string
  placeholder?: string
  label?: string
  required?: boolean
  disabled?: boolean
  fullWidth?: boolean
}

export function PhoneField<T extends FieldValues>({
  control,
  name,
  format,
  placeholder,
  label = 'Phone',
  required = false,
  disabled = false,
  fullWidth = true,
}: PhoneFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <PatternFormat
          customInput={TextField}
          format={format}
          placeholder={placeholder}
          mask="_"
          type="tel"
          autoComplete="tel"
          valueIsNumericString
          label={label}
          fullWidth={fullWidth}
          required={required}
          disabled={disabled}
          value={field.value}
          name={field.name}
          inputRef={field.ref}
          onBlur={field.onBlur}
          onValueChange={({ value }) => field.onChange(value)}
          error={fieldState.invalid}
          helperText={fieldState.error?.message ?? ' '}
        />
      )}
    />
  )
}
