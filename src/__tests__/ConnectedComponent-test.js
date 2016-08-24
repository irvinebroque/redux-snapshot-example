/* @flow */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import renderer from 'react/lib/ReactTestRenderer'
import ConnectedComponent from '../ConnectedComponent'

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

test('ConnectedComponent renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ConnectedComponent/>
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
