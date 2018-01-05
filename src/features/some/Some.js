import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import action from '../../action';
import asyncAction from '../../async-action';

const Some = (props) => (
  <div>
    Some. <Link to="/">Home</Link>
    <div>
      <div>Value reduced by some feature reducer: {JSON.stringify(props.some)}</div>
      <button onClick={() => props.action(!props.some)}>Action</button>
      
      <div>Loading reduced by core reducer (async): {JSON.stringify(props.loading)}</div>
      <div>Data reduced by core reducer (async): {JSON.stringify(props.data)}</div>
      <button onClick={() => props.asyncAction(123)}>Async Action</button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  some: state.features.some,
  loading: state.core.loading,
  data: state.core.data,
});

const mapDispatchToProps = (dispatch) => ({
  action: (value) => dispatch(action(value)),
  asyncAction: (value) => dispatch(asyncAction(value))
});

const SomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Some);

export default SomeConnected;
