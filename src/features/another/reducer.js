export default (state = 0, action) => {
  switch (action.type) {
    case 'ACTION': {
      return state + 1;
    }

    default: {
      return state;
    }
  }
};
