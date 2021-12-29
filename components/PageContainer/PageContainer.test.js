import { render } from '@testing-library/react'
import PageContainer from './PageContainer'
describe('PageContainer', () => {
  it('page container should render his childrens', () => {
    const { getByText } = render(<PageContainer><div>test</div></PageContainer>)
    expect(getByText(/test/i)).toBeInTheDocument()
  })
})
