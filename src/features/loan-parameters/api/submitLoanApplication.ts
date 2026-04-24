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

const SUBMIT_LOAN_APPLICATION_URL = 'https://dummyjson.com/products/adda'

export async function submitLoanApplication(payload: SubmitLoanApplicationPayload): Promise<void> {
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

  await response.json()
}
