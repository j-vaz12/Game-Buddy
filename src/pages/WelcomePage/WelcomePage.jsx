import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './WelcomePage.css'

export default function WelcomePage() {
    return(
        <div className="WelcomePage">
            <h1>Welcome to Game-Buddy</h1>
            <p> Game Buddy is a cutting-edge web application designed for passionate gamers who love to keep their gaming experiences organized and personalized. With an extensive API that covers a vast library of games, Game Buddy is the perfect platform for gamers to curate their collections, track their progress, and keep their wishlist up-to-date with the latest and greatest titles.</p>
            <Link className="welcome-link" to="/login"> SingUp</Link>
        </div>
    )
}

