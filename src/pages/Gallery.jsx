import videos from "../data/contents";
import "./CSS/Gallery.css";
import { useState } from "react";

function Gallery() {
  const openNewWindow = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  const [displayedVideos, setDisplayedVideos] = useState(videos.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleSeeMoreClick = () => {
    setShowAll(true);
    setDisplayedVideos(videos);
  };

  return (
    <>
      <h1 className="gallery-head" title="Gallery">
        {" "}
        Gallery
      </h1>
      <section className="videos">
        {displayedVideos.map((video, index) => (
          <div key={index} className="container-videos">
            <div className="box" onClick={() => openNewWindow(video.url)}>
              <iframe title={video.title} src={video.video}></iframe>
              <p className="title" title={video.title}>
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </section>
      {!showAll && videos.length > 3 && (
        <div className="see-more" onClick={handleSeeMoreClick}>
          <p className="see-more-text">See more ...</p>
        </div>
      )}
    </>
  );
}
export default Gallery;
