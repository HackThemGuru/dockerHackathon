import React from "react";

const Track = ({ songs }) => (
  <div className="col-md-3">
    <div className="shadow-sm border mb-3 rounded">
      <div className="card-body">
        <h4 className="bg-info text-light p-1 rounded">
          <img
            src={songs.header_image_thumbnail_url}
            alt={songs.title}
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          {songs.title.length > 10 ? `${songs.title.substring(0, 10)}...` : songs.title}
        </h4>
        <p className="card-text">
          <i className="fas fa-record-vinyl"></i>
          {songs.full_title.length > 30 ? `${songs.full_title.substring(0, 30)}...` : songs.full_title}
        </p>
      </div>
    </div>
  </div>
);

export default Track;
