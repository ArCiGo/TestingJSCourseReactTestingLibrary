/*import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import 'jest-axe/extend-expect'
import React from 'react'
import {render} from 'react-testing-library'
import {axe} from 'jest-axe'

function Form() {
  return (
    <form>
      <label htmlFor="test">Username</label>
      <input id="username" placeholder="username" name="fgdgf" />
    </form>
  )
}

test('the form is accesible', async () => {
  const {container} = render(<Form />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})
*/
