import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { newSongs } from "../../action/fetchSongs";

class Search extends Component {
  state = {
    artistId: ""
  };
  onChange = ({target: {name, value}}) => {
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.newSongs(this.state.artistId);
  };

  render() {
    return (
      <div style={{ width: "60%" }} className="mx-auto">
        <div className="card card-body mb-4 text-center">
          <h1 className="m-1">
            <i className="fa fa-music pr-2"></i>
            Search for an Artist ID{" "}
          </h1>
          <form onSubmit={this.onSubmit}>
            <input
              className="form-control form-control-lg mb-2"
              placeholder="artist id.. (eg. 16775 for SIa, 150934 for Chainsmoker, 609667 for Camila, 195029 for Shawn Mendis)"
              name="artistId"
              value={this.state.artistId}
              onChange={this.onChange}
            />
            <button className="form-control btn-info mb-4" type="submit">
              Search Songs
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  newSongs: propTypes.func.isRequired,
  artistId: propTypes.string
};
export default connect(null, { newSongs })(Search);
