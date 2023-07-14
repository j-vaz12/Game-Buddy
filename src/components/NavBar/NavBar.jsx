import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {/* <Link to="/InProgress">In Progress</Link> */}
      {/* &nbsp; | &nbsp; */}
      {/* <span className="separator"> | </span> */}
      {/* <Link to="/completed">Completed</Link> */}
      {/* &nbsp; | &nbsp; */}
      <Link to="/Collection" className='line'>Collection</Link>
      &nbsp; | &nbsp;
      <Link to="search"> Search </Link>
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="nav-link" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}