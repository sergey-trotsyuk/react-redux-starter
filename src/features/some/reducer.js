export default (state = false, action) => {
  switch (action.type) {
    case 'ACTION': {
      return action.payload
    }

    default: {
      return state;
    }
  }
};
