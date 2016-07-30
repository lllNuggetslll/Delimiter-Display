import { FETCH_DATA, DELETE_COLUMN, VALUE_SEARCH } from '../actions/index';

export default function(state = -1, action) {
  switch (action.type) {
    case FETCH_DATA:
        return [ ...state, action.payload.data ];

    case DELETE_COLUMN:
      return action.payload.data;

    case VALUE_SEARCH:
      return action.payload.data;

      default: return state;
  }

}
