import React, { Component } from 'react';
import { connect } from 'react-redux'

class AnotherConnectedComponent extends Component {
  render() {
    return (
      <div>
        <div>some text</div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(AnotherConnectedComponent)
