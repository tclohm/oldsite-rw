import { render, cleanup } from '@testing-library/react'

import ProjectsPage from './ProjectsPage'

describe('ProjectsPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsPage />)
    }).not.toThrow()
  })
})
