// import { selectSong } from "../actions";
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "no scrubs",
      duration: "4:05",
    },
    {
      title: "macarena",
      duration: "2:00",
    },
    {
      title: "all stars",
      duration: "3:05",
    },
    {
      title: "bones",
      duration: "4:55",
    },
  ];
};

const SelectedSongReducer = (SelectedSong = null, action) => {
  if (action.type === "SONG_SELECT") {
    return action.payload;
  }
  return SelectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: SelectedSongReducer,
});
