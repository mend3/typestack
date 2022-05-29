import { render } from '@testing-library/react'

import Container from './index'

describe('Container', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Container title='Test Container' />)
    expect(baseElement).toBeTruthy()
  })
})
