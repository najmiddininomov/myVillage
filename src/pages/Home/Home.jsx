import React from 'react';
import './Home.scss';
import { FaLeaf, FaMountain, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <div className="home__content container">
        <h1>Welcome to <span>Dehqonobod</span></h1>
        <p>
          A peaceful village surrounded by nature 🌿<br />
          Experience the calm, the beauty, and the simplicity of our land.
        </p>

        <div className="home__icons">
          <div><FaLeaf /></div>
          <div><FaMountain /></div>
          <div><FaSun /></div>
        </div>

         <Link to="/about" className="home__btn">Discover More</Link>
      </div>
    </section>
  );
};

export default Home;
