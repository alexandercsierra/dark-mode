import React from 'react';
import useDarkMode from '../hooks/useDarkMode'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <NavLink to="/"><h1>Crypto Tracker</h1></NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
