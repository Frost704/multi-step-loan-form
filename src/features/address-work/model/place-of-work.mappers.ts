import type { SelectOption } from '@/shared/types/select-option'

export function mapPlaceOfWorkOptions(categories: string[]): SelectOption[] {
  return categories.map(category => ({
    value: category,
    label: category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
  }))
}
