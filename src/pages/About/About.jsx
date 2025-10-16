import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="overlay"></div>
      <div className="container about__content">
        <h1>
          About <span>Dehqonobod</span>
        </h1>
        <p className="about__text">
          Dehqonobod is a peaceful village nestled between green hills and
          rivers. It is known for its kind people, clean air, and beautiful
          landscapes. Every morning begins with birds singing, and evenings end
          with calm sunsets over the fields. The people of Dehqonobod live in
          harmony with nature — farming, raising animals, and preserving
          traditions that have lasted for generations.
        </p>

        <p className="about__text">
          In recent years, the village has slowly developed while maintaining
          its natural beauty. New houses, roads, and schools are being built —
          but the soul of Dehqonobod remains the same: simple, warm, and full of
          life.
        </p>

        <div className="about__gallery">
          <div className="img-card">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Green Fields"
            />
          </div>
          <div className="img-card">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
              alt="Mountain Landscape"
            />
          </div>
          <div className="img-card">
            <img
              src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80"
              alt="Village Sunset"
            />
          </div>
        </div>

        <div className="about__quote">
          <p>
            “Our village is small, but our hearts are full of love and peace.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
