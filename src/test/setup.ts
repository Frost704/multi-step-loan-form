import { Buffer } from 'node:buffer'
import process from 'node:process'

import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'

type StderrWrite = typeof process.stderr.write

const CSS_PARSE_WARNING = 'Could not parse CSS stylesheet'
const originalConsoleError = console.error
const originalStderrWrite: StderrWrite = process.stderr.write.bind(process.stderr)

const hasCssParseWarning = (message: unknown) => String(message).includes(CSS_PARSE_WARNING)

const getChunkText = (chunk: string | Uint8Array, encoding?: BufferEncoding) =>
  typeof chunk === 'string' ? chunk : Buffer.from(chunk).toString(encoding)

beforeAll(() => {
  vi.spyOn(console, 'error').mockImplementation((message?: unknown, ...args: unknown[]) => {
    if (hasCssParseWarning(message)) {
      return
    }

    originalConsoleError(message, ...args)
  })

  const patchedStderrWrite: StderrWrite = (
    chunk: string | Uint8Array,
    encodingOrCallback?: BufferEncoding | ((err?: Error | null) => void),
    callback?: (err?: Error | null) => void,
  ) => {
    const encoding = typeof encodingOrCallback === 'string' ? encodingOrCallback : undefined
    const resolvedCallback =
      typeof encodingOrCallback === 'function' ? encodingOrCallback : callback

    if (hasCssParseWarning(getChunkText(chunk, encoding))) {
      resolvedCallback?.()
      return true
    }

    if (encoding !== undefined) {
      return originalStderrWrite(chunk, encoding, resolvedCallback)
    }

    return originalStderrWrite(chunk, resolvedCallback)
  }

  process.stderr.write = patchedStderrWrite
})

afterEach(() => {
  cleanup()
  sessionStorage.clear()
})

afterAll(() => {
  console.error = originalConsoleError
  process.stderr.write = originalStderrWrite
})
