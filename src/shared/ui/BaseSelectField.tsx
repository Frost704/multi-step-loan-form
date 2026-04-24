import type { SelectOption } from '@/shared/types/select-option'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'

type BaseSelectFieldProps = {
  name: string
  label: string
  value: string
  options: readonly SelectOption[]
  onChange: (value: string) => void
  error?: string
  autoComplete?: string
  required?: boolean
  disabled?: boolean
  fullWidth?: boolean
  helperText?: string
}

export function BaseSelectField({
  name,
  label,
  value,
  options,
  onChange,
  error,
  autoComplete,
  required = false,
  disabled = false,
  fullWidth = true,
  helperText,
}: BaseSelectFieldProps) {
  const inputId = `${name}-input`
  const labelId = `${name}-label`
  const helperTextId = `${name}-helper-text`

  return (
    <FormControl
      fullWidth={fullWidth}
      required={required}
      disabled={disabled}
      error={Boolean(error)}
    >
      <InputLabel id={labelId} htmlFor={inputId}>
        {label}
      </InputLabel>

      <Select
        labelId={labelId}
        label={label}
        value={value}
        inputProps={{
          id: inputId,
          autoComplete,
          'aria-describedby': helperTextId,
        }}
        onChange={event => onChange(event.target.value)}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <FormHelperText>{error ?? helperText ?? ' '}</FormHelperText>
    </FormControl>
  )
}
