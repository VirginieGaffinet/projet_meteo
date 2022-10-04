export const SHOW_SEARCH_INPUT = 'SHOW_SEARCH_INPUT';
export const GET_CITY = 'GET_CITY';
export const UPDATE_SEARCH_CITY = 'UPDATE_SEARCH_CITY';

export const showSearchInput = () => ({
  type: SHOW_SEARCH_INPUT,
});
export const getCity = () => ({
  type: GET_CITY,
});
export const updateSearchCity = (newValue) => ({
  type: UPDATE_SEARCH_CITY,
  newValue: newValue,
});
