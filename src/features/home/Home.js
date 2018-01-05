import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    Home. <Link to="/some">Some</Link>, <Link to="/another">Another</Link>
  </div>
);

export default Home;
