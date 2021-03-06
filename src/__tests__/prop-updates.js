import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, getByTestId, queryByTestId, rerender} = render(
    <FavoriteNumber />,
  )
  const input = getByLabelText('Favorite Number')

  fireEvent.change(input, {target: {value: 10}})

  expect(getByTestId('error-message')).toHaveTextContent(
    'The number is invalid',
  )

  rerender(<FavoriteNumber max={10} />)
  expect(queryByTestId('error-message')).toBeNull()
})
