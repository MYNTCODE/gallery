import videos from "../data/contents";

function Gallery() {
  return (
    <>
      <h1> Gallery</h1>
      <section className="videos">
        {videos.map((video, index) => (
          <div key={index} className="container-videos">
            <div className="box">
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
