// reducers/reducers.js
const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default rootReducer;
