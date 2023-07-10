import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
export default function WelcomePage() {
    return(
        <div className="WelcomePage">
            <h1>Welcome to Game-Buddy...</h1>
            <Link to="/login"> SingUp</Link>
        </div>
    )
}

