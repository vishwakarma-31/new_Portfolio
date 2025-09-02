import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as axeMatchers from 'jest-axe/matchers'

expect.extend(axeMatchers)

afterEach(() => {
  cleanup()
})