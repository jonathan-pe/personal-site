import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '../src/app/page'
 
describe('Page', () => {
  it('renders the page', () => {
    render(<HomePage />)
 
    const heading = screen.getAllByRole('heading', { level: 1 })
 
    expect(heading.length).toBe(3)
    expect(heading[0]).toHaveTextContent('Software Engineer.')
    expect(heading[1]).toHaveTextContent('Gamer.')
    expect(heading[2]).toHaveTextContent('DJ.')
  })
})