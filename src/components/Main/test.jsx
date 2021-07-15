import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /boilerplate/i })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the text color correctly', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /boilerplate/i })).toHaveStyle({
      fontSize: '4rem'
    })
  })
})
