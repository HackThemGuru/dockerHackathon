import { FETCH_SONGS, NEW_SONGS } from "../action/index";

const initialState = {
  songs: []
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    case NEW_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    default:
      return state;
  }
}

export default songReducer;