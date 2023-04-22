import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );

  


function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Expert Care</Link></li>
        <li><Link to="/for-individual">For Individual</Link></li>
        <li><Link to="/for-organisation">For Organisation</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
};
export default HomePage;
