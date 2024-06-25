import { render } from '@testing-library/react'

import AboutPage from '@/app/(root)/about/page'

it('render AboutPage unchanged', () => {
  const { container } = render(AboutPage as any)

  expect(container).toMatchSnapshot()
})
