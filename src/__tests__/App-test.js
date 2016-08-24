/* @flow */
import React from 'react'
import renderer from 'react/lib/ReactTestRenderer'
import App from '../App'

test('App renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
