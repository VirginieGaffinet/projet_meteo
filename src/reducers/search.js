import {
  SHOW_SEARCH_INPUT,
  UPDATE_SEARCH_CITY,
} from '../actions/search';

const initialState = {
  showSearch: false,
  inputCity: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_CITY:
      return {
        ...state,
        inputCity: action.newValue,
      };
    case SHOW_SEARCH_INPUT:
      return {
        ...state,
        showSearch: true,
      };
    default:
      return state;
  }
}



export default reducer;