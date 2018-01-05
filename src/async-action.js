export default (payload) => (dispatch) => {
  dispatch(request(payload));
  setTimeout(() => {
    dispatch(success({
      someData: true
    }));
  }, 1000);
}

const request = (param) => ({
  type: 'ASYNC_ACTION_REQUEST',
  payload: {
    param
  }
});

const success = (data) => ({
  type: 'ASYNC_ACTION_SUCCESS',
  payload: data
});
