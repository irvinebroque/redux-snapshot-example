import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ConnectedComponent from './ConnectedComponent'

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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <ConnectedComponent/>
        </div>
      </Provider>
    );
  }
}

export default App;
