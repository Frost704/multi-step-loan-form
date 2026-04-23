export type PlaceOfWorkOption = {
  value: string
  label: string
}

export function mapPlaceOfWorkOptions(categories: string[]): PlaceOfWorkOption[] {
  return categories.map(category => ({
    value: category,
    label: category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
  }))
}
