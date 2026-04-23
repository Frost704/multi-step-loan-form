import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

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

export const LoanParameterSection = memo(function LoanParameterSection({
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
        <Typography variant="caption" color="text.secondary">
          {rangeLabel}
        </Typography>
      </LoanParameterHeader>

      <LoanParameterValue>
        {valuePrefix}
        {value}
        {valueUnit ? <LoanParameterUnit> {valueUnit}</LoanParameterUnit> : null}
      </LoanParameterValue>

      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        marks={marks}
        valueLabelDisplay="auto"
        valueLabelFormat={formatValue}
        onChange={(_, nextValue) => {
          if (typeof nextValue === 'number') onChange(nextValue)
        }}
      />

      <LoanPresetList>
        {presets.map(preset => (
          <PresetButton
            key={preset}
            type="button"
            data-active={value === preset ? 'true' : 'false'}
            aria-pressed={value === preset}
            onClick={() => onChange(preset)}
          >
            {formatValue(preset)}
          </PresetButton>
        ))}
      </LoanPresetList>
    </LoanParameterCard>
  )
})
