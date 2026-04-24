import Slider from '@mui/material/Slider'

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

  return (
    <LoanParameterCard>
      <LoanParameterHeader>
        <LoanParameterLabel variant="overline">{title}</LoanParameterLabel>
        <LoanParameterValue variant="overline">
          {valuePrefix}
          {value}
          {valueUnit ? <LoanParameterUnit> {valueUnit}</LoanParameterUnit> : null}
        </LoanParameterValue>
      </LoanParameterHeader>

      <Slider
        aria-label={title}
        value={value}
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
