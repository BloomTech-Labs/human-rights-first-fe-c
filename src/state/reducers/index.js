// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

const initialState = {
  filteredData: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER':
      return {};
    default:
      return state;
  }
}

export default rootReducer;
