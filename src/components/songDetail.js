import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  //   console.log(song);
  if (!song) {
    return <div> select a song</div>;
  }

  return (
    <div>
      <h3>{song.title}</h3>
      <p>{song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
