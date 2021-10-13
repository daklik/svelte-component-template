/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/svelte'
import Button from '../src/Button.svelte'

it('should render', async () => {
  const { getByText } = render(Button, {
    label: 'world',
  })

  expect(getByText('world')).toBeInTheDocument()
})

it('click event works', async () => {
    const { getByText, component } = render(Button, {
      label: 'world',
    })
    const mock = jest.fn()
    const button = getByText("world")
    component.$on("onButtonClick", mock)
    fireEvent.click(button)
    expect(mock).toHaveBeenCalled()
  })