export const LOAN_AMOUNT_MIN = 200
export const LOAN_AMOUNT_MAX = 1000
export const LOAN_AMOUNT_STEP = 100

export const LOAN_TERM_MIN = 10
export const LOAN_TERM_MAX = 30
export const LOAN_TERM_STEP = 1

export const LOAN_AMOUNT_MARKS = [
  { value: LOAN_AMOUNT_MIN, label: `$${LOAN_AMOUNT_MIN}` },
  { value: LOAN_AMOUNT_MIN * 3, label: `$${LOAN_AMOUNT_MIN * 3}` },
  { value: LOAN_AMOUNT_MAX, label: `$${LOAN_AMOUNT_MAX}` },
] as const

export const LOAN_TERM_MARKS = [
  { value: LOAN_TERM_MIN, label: `${LOAN_TERM_MIN}` },
  { value: LOAN_TERM_MIN * 2, label: `${LOAN_TERM_MIN * 2}` },
  { value: LOAN_TERM_MIN * 3, label: `${LOAN_TERM_MIN * 3}` },
] as const

export const LOAN_AMOUNT_PRESETS = [
  LOAN_AMOUNT_MIN,
  LOAN_AMOUNT_MIN * 2,
  LOAN_AMOUNT_MIN * 3,
  LOAN_AMOUNT_MIN * 4,
  LOAN_AMOUNT_MAX,
] as const
export const LOAN_TERM_PRESETS = [
  LOAN_TERM_MIN + 5,
  LOAN_TERM_MIN * 2,
  LOAN_TERM_MAX - 5,
  LOAN_TERM_MAX,
] as const
