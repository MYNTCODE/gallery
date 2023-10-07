import videos from "../data/contents";

function Gallery() {
  return (
    <>
      <h1> Gallery</h1>
      <section className="videos">
        {videos.map((video, index) => (
          <div key={index} className="box">
            <iframe title={video.title} src={video.video}></iframe>

            <p className="title" title="">
              {video.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
export default Gallery;
