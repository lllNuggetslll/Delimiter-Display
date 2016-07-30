import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/';

export const FETCH_DATA = 'FETCH_DATA';
export const DELETE_COLUMN = 'DELETE_COLUMN';
export const VALUE_SEARCH = 'VALUE_SEARCH';

export function fetchData(searchTerm) {
  const url = `${ROOT_URL}search/${searchTerm}`;
  const request = axios.get(url);

  return {
    type: FETCH_DATA,
    payload: request
  }
}

export function deleteColumn(newProps) {
  return {
    type: DELETE_COLUMN,
    payload: { data: newProps }
  }
}

export function valueSearch(newProps) {
  return {
    type: VALUE_SEARCH,
    payload: { data: [newProps] }
  }
}
