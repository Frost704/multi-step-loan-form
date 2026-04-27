import { afterEach, describe, expect, it, vi } from 'vitest'

import { getPlaceOfWorkOptions } from './getPlaceOfWorkOptions'

describe('getPlaceOfWorkOptions', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns validated category list', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify(['banking', 'retail']), { status: 200 }),
    )

    await expect(getPlaceOfWorkOptions()).resolves.toEqual(['banking', 'retail'])
  })

  it('throws when response is not ok', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 400 }))

    await expect(getPlaceOfWorkOptions()).rejects.toThrow('Failed to load place of work options')
  })

  it('throws when response shape is invalid', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ invalid: true }), { status: 200 }),
    )

    await expect(getPlaceOfWorkOptions()).rejects.toThrow('Invalid place of work options response')
  })
})
