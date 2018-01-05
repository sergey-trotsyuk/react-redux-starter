const initState = {
  loading: false,
  data: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'ASYNC_ACTION_REQUEST': {
      return {
        ...state,
        loading: true
      }
    }

    case 'ASYNC_ACTION_SUCCESS': {
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    }

    default: {
      return state;
    }
  }
};
