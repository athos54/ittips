import { render } from '@testing-library/react'
import Home from './index'
it('Home component should render hello world', () => {
  const { getByText } = render(<Home/>)
  expect(getByText(/hello world/i)).toBeInTheDocument()
})
