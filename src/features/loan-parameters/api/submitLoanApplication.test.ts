import { afterEach, describe, expect, it, vi } from 'vitest'

import { submitLoanApplication } from './submitLoanApplication'

describe('submitLoanApplication', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('posts the full name to the submit endpoint', async () => {
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(
        new Response(JSON.stringify({ id: 195, title: 'John Doe' }), { status: 200 }),
      )

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

  it('returns the id from the response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ id: 42, title: 'Jane Smith' }), { status: 200 }),
    )

    const result = await submitLoanApplication({ firstName: 'Jane', lastName: 'Smith' })

    expect(result).toEqual({ id: 42 })
  })

  it('throws HttpError when response is not ok', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 500 }))

    await expect(
      submitLoanApplication({ firstName: 'John', lastName: 'Doe' }),
    ).rejects.toMatchObject({
      status: 500,
    })
  })

  it('throws when response body does not match schema', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ unexpected: true }), { status: 200 }),
    )

    await expect(submitLoanApplication({ firstName: 'John', lastName: 'Doe' })).rejects.toThrow()
  })
})
