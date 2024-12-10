import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

const sum = (a: number, b: number) => a + b

test('adds 1 + 2 to equal 3', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  expect(sum(1, 2)).toBe(5)
})
