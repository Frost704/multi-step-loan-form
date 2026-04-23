import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

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
}: LoanParameterSectionProps) {
  const formatValue = (v: number) => (valueUnit ? `${v} ${valueUnit}` : `${valuePrefix}${v}`)

  const rangeLabel = valueUnit
    ? `${min} – ${max} ${valueUnit}`
    : `${valuePrefix}${min} – ${valuePrefix}${max}`

  return (
    <LoanParameterCard>
      <LoanParameterHeader>
        <LoanParameterLabel variant="overline">{title}</LoanParameterLabel>
        <LoanParameterValue>
          {valuePrefix}
          {value}
          {valueUnit ? <LoanParameterUnit> {valueUnit}</LoanParameterUnit> : null}
        </LoanParameterValue>
      </LoanParameterHeader>

      <Typography variant="caption" color="text.secondary">
        {rangeLabel}
      </Typography>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        marks={marks}
        onChange={(_, nextValue) => {
          if (typeof nextValue === 'number') onChange(nextValue)
        }}
        sx={{ mx: 1.5, width: 'calc(100% - 24px)' }}
      />

      <LoanPresetList>
        {presets.map(preset => (
          <PresetButton
            key={preset}
            type="button"
            data-active={value === preset}
            aria-pressed={value === preset}
            onClick={() => onChange(preset)}
          >
            {formatValue(preset)}
          </PresetButton>
        ))}
      </LoanPresetList>
    </LoanParameterCard>
  )
}
