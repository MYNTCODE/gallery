import videos from "../data/contents";
import "./CSS/Gallery.css";

function Gallery() {
  const openNewWindow = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };
  return (
    <>
      <h1> Gallery</h1>
      <section className="videos">
        {videos.map((video, index) => (
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
    </>
  );
}
export default Gallery;
