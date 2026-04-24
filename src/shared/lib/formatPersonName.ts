type FormatPersonNameResult = {
  fullName: string
  displayName: string
}

export function formatPersonName(firstName: string, lastName: string): FormatPersonNameResult {
  const normalizedFirstName = firstName.trim()
  const normalizedLastName = lastName.trim()
  const fullName = [normalizedFirstName, normalizedLastName].filter(Boolean).join(' ')

  if (!normalizedLastName) {
    return {
      fullName,
      displayName: normalizedFirstName,
    }
  }

  return {
    fullName,
    displayName: `${normalizedFirstName} ${normalizedLastName[0]}.`,
  }
}
