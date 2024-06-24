import { render, screen } from '@testing-library/react'

import AboutPage from '@/app/about/page'

describe('Page', () => {
  it('renders a heading in AboutPage', () => {
    render(<AboutPage />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
