import { useMutation } from '@tanstack/react-query'
import { submitLoanApplication } from '../api/submitLoanApplication'

export function useSubmitLoanApplication() {
  return useMutation({
    mutationFn: submitLoanApplication,
  })
}
