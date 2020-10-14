// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

const initialState = {
  data: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETDATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
