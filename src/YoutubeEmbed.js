import React from "react";
import PropTypes from "prop-types";
import './Film.css'; // Tell webpack that Button.js uses these styles


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="200"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
