import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Another = (props) => (
  <div>
    Another. <Link to="/">Home</Link>
    <div>Value reduced by another feature reducer: {props.another}</div>
  </div>
);


const mapStateToProps = (state) => ({
  another: state.features.another,
});

const AnotherConnected = connect(
  mapStateToProps,
)(Another);

export default AnotherConnected;
