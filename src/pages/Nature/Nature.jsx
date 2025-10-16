import React from "react";
import "./Nature.scss";

const Nature = () => {
  return (
    <section className="nature">
      <div className="nature__overlay"></div>

      <div className="container nature__content">
        <h1>Beauty of Dehqonobod</h1>
        <p>
          Dehqonobod tabiatining betakror go‘zalligi — yashil vodiylar, tiniq
          havo, shovqin-suronlardan yiroq tinchlik. Bu yerda tabiat
          uyg‘unligida hayot asta sekin, lekin mazmunli oqadi. 
          Har bir daraxt, har bir shamol nafasi tinchlikni olib keladi.
        </p>

        <div className="nature__gallery">
          <div className="nature__card">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
              alt="Nature 1"
            />
            <h3>Yashil dalalar</h3>
          </div>

          <div className="nature__card">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
              alt="Nature 2"
            />
            <h3>Tog‘ manzaralari</h3>
          </div>

          <div className="nature__card">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80"
              alt="Nature 3"
            />
            <h3>Quyosh botishi</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nature;
