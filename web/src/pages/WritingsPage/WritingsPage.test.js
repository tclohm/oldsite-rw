import { render, cleanup } from '@testing-library/react'

import WritingsPage from './WritingsPage'

describe('WritingsPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WritingsPage />)
    }).not.toThrow()
  })
})
