
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className="nav-links">
        <Link to="/Collection" className='nav-link'>Collection</Link>
        <Link to="search" className='nav-link'>Search</Link>
      </div>
      <div className="welcome-logout">
        <span className="welcome-message">Welcome, {user.name}</span>
        <Link to="nav-link" onClick={handleLogOut} className='log-out-link'>Log Out</Link>
      </div>
    </nav>
  );
}
