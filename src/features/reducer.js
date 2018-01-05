import { combineReducers } from 'redux';

import { reducer as some } from './some';
import { reducer as another } from './another';

export default combineReducers({
  some,
  another,
});
