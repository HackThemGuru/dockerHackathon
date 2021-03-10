import React, { Component } from "react";
import propTypes from "prop-types";
import Track from "./Track";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { fetchSongs } from "../../action/fetchSongs";

class Tracks extends Component {
  componentDidMount() {
    this.props.fetchSongs();
  }
  render() {
    const { songs } = this.props;
    return songs.length === 0 ? <Spinner /> : (
      <div className="container">
        <div className="row">
          {songs.map(song => {
            return <Track key={song.id} songs={song} />;
          })}
        </div>
      </div>
    )
  }
}

Tracks.propTypes = {
  fetchSongs: propTypes.func.isRequired,
  songs: propTypes.array.isRequired
};

const mapStateToProps = state => ({
  songs: state.data.songs
});

export default connect(mapStateToProps, { fetchSongs })(Tracks);
