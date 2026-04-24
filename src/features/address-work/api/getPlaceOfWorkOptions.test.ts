import { afterEach, describe, expect, it, vi } from 'vitest'

import { getPlaceOfWorkOptions } from './getPlaceOfWorkOptions'

describe('getPlaceOfWorkOptions', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns validated category list', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(['banking', 'retail']),
    } as unknown as Response)

    await expect(getPlaceOfWorkOptions()).resolves.toEqual(['banking', 'retail'])
  })

  it('throws when response is not ok', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
    } as Response)

    await expect(getPlaceOfWorkOptions()).rejects.toThrow('Failed to load place of work options')
  })

  it('throws when response shape is invalid', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ invalid: true }),
    } as unknown as Response)

    await expect(getPlaceOfWorkOptions()).rejects.toThrow('Invalid place of work options response')
  })
})
