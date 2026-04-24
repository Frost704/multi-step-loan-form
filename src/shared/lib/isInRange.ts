export const isInRange = (value: number, min: number, max: number): boolean =>
  Number.isFinite(value) && value >= min && value <= max
