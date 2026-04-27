import { z } from 'zod'

export class HttpError extends Error {
  readonly status: number
  constructor(status: number) {
    super(`HTTP ${status}`)
    this.status = status
  }
}

type SubmitLoanApplicationPayload = {
  firstName: string
  lastName: string
}

export type SubmitLoanApplicationResult = {
  id: number
}

const submitResponseSchema = z.object({
  id: z.number(),
})

const SUBMIT_LOAN_APPLICATION_URL = 'https://dummyjson.com/products/add'

export async function submitLoanApplication(
  payload: SubmitLoanApplicationPayload,
): Promise<SubmitLoanApplicationResult> {
  const response = await fetch(SUBMIT_LOAN_APPLICATION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: `${payload.firstName} ${payload.lastName}`,
    }),
  })

  if (!response.ok) {
    throw new HttpError(response.status)
  }

  const data: unknown = await response.json()
  return submitResponseSchema.parse(data)
}
