import FormHelperText from '@mui/material/FormHelperText'
import Slider from '@mui/material/Slider'
import { useId } from 'react'

import {
  LoanParameterCard,
  LoanParameterHeader,
  LoanParameterLabel,
  LoanParameterUnit,
  LoanParameterValue,
  LoanPresetList,
  PresetButton,
} from './LoanParameterSection.styles'

type LoanParameterSectionProps = {
  title: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
  marks: readonly { value: number; label: string }[]
  presets: readonly number[]
  valuePrefix?: string
  valueUnit?: string
  error?: string
}

export function LoanParameterSection({
  title,
  value,
  onChange,
  min,
  max,
  step,
  marks,
  presets,
  valuePrefix = '',
  valueUnit,
  error,
}: LoanParameterSectionProps) {
  const helperTextId = useId()
  const safeValue = value >= min && value <= max ? value : min
  const formatValue = (v: number) => (valueUnit ? `${v} ${valueUnit}` : `${valuePrefix}${v}`)

  return (
    <LoanParameterCard>
      <LoanParameterHeader>
        <LoanParameterLabel variant="overline">{title}</LoanParameterLabel>
        <LoanParameterValue variant="overline">
          {valuePrefix}
          {safeValue}
          {valueUnit ? <LoanParameterUnit> {valueUnit}</LoanParameterUnit> : null}
        </LoanParameterValue>
      </LoanParameterHeader>

      <Slider
        aria-label={title}
        aria-describedby={error ? helperTextId : undefined}
        aria-invalid={Boolean(error)}
        value={safeValue}
        min={min}
        max={max}
        step={step}
        marks={marks}
        valueLabelDisplay="auto"
        getAriaValueText={formatValue}
        onChange={(_, nextValue) => {
          if (typeof nextValue === 'number') onChange(nextValue)
        }}
        sx={{ mx: 1.5, width: 'calc(100% - 24px)' }}
      />
      {error ? (
        <FormHelperText id={helperTextId} error sx={{ mx: 1.5, mt: 0 }}>
          {error}
        </FormHelperText>
      ) : null}

      <LoanPresetList>
        {presets.map(preset => (
          <PresetButton
            key={preset}
            type="button"
            data-active={safeValue === preset}
            aria-pressed={safeValue === preset}
            onClick={() => onChange(preset)}
          >
            {formatValue(preset)}
          </PresetButton>
        ))}
      </LoanPresetList>
    </LoanParameterCard>
  )
}
