import { combineReducers } from 'redux';

import { reducer as core } from './core';
import { reducer as features } from './features';

export default combineReducers({
  core,
  features,
});
