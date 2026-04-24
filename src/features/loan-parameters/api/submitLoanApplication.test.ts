import { afterEach, describe, expect, it, vi } from 'vitest'

import { submitLoanApplication } from './submitLoanApplication'

describe('submitLoanApplication', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('posts the full name to the submit endpoint', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ id: 1 }),
    } as unknown as Response)

    await submitLoanApplication({ firstName: 'John', lastName: 'Doe' })

    expect(fetchMock).toHaveBeenCalledWith('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'John Doe',
      }),
    })
  })

  it('throws HttpError when response is not ok', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
      status: 500,
    } as Response)

    await expect(
      submitLoanApplication({ firstName: 'John', lastName: 'Doe' }),
    ).rejects.toMatchObject({
      status: 500,
    })
  })
})
