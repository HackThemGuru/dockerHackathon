import { FETCH_SONGS, NEW_SONGS } from ".";
import axios from "axios";

export const fetchSongs = () => (dispatch) => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.genius.com/artists/357955/songs`,
      {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_KEY,
        },
      }
    )
    .then(({data: {response: {songs}}}) =>
      dispatch({
        type: FETCH_SONGS,
        payload: songs,
      })
    )
    .catch((err) => console.log(err));
};

export const newSongs = (artist_id) => (dispatch) => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.genius.com/artists/${artist_id}/songs`,
      {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_KEY,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: NEW_SONGS,
        payload: res.data.response.songs,
      });
    })
    .catch((err) => console.log(err));
};
