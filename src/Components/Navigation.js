import { Link } from 'react-router-dom';

import '../css/navigation.css';

export const Navigation = () => {
  return (
    <nav className='background-nav'>
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/view-animals">Animals</Link>
    </nav>
  );
};
