import React from "react";
import "./Gallery.scss";

const Gallery = () => {
  const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", title: "Morning Fields" },
  { id: 2, src: "https://images.unsplash.com/photo-1477587458883-47145ed94245", title: "Village Sunset" },
  { id: 3, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", title: "Mountain View" },
  {  id: 4,
  src: "https://images.pexels.com/photos/1563604/pexels-photo-1563604.jpeg",
  title: "Nature Path", },
  { id: 5, src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429", title: "Peaceful River" },
  { id: 6, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", title: "Golden Horizon" },
];


  return (
    <section className="gallery">
      <div className="container">
        <h1>Dehqonobod Gallery</h1>
        <p>
          Dehqonobodning tabiati, hayoti va go‘zalligi. Har bir surat — bu
          qishloqning yuragi, tabiatining ohangi, odamlari va tinchlik ruhi.
        </p>

        <div className="gallery__grid">
          {images.map((item) => (
            <div className="gallery__card" key={item.id}>
              <img src={item.src} alt={item.title} />
              <div className="gallery__overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
