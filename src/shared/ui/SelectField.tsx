import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Controller, type Control, type FieldPath, type FieldValues } from 'react-hook-form'

type SelectOption = {
  value: string
  label: string
}

type SelectFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  label: string
  options: readonly SelectOption[]
  autoComplete?: string
  required?: boolean
  disabled?: boolean
  fullWidth?: boolean
}

export function SelectField<T extends FieldValues>({
  control,
  name,
  label,
  options,
  autoComplete,
  required = false,
  disabled = false,
  fullWidth = true,
}: SelectFieldProps<T>) {
  const inputId = `${name}-input`
  const labelId = `${name}-label`

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          fullWidth={fullWidth}
          required={required}
          disabled={disabled}
          error={Boolean(fieldState.error)}
        >
          <InputLabel id={labelId} htmlFor={inputId}>
            {label}
          </InputLabel>
          <Select
            {...field}
            labelId={labelId}
            label={label}
            value={field.value ?? ''}
            inputProps={{ id: inputId, autoComplete }}
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{fieldState.error?.message ?? ' '}</FormHelperText>
        </FormControl>
      )}
    />
  )
}
