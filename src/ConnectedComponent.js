import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnotherConnectedComponent from './AnotherConnectedComponent'

class ConnectedComponent extends Component {
  render() {
    return (
      <div>
        <div>some text</div>
        <AnotherConnectedComponent/>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(ConnectedComponent)
