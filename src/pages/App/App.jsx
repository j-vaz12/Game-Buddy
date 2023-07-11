import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import GameSearch from '../GameSearch/GameSearch';
import CollectionPage from '../CollectionPage/CollectionPage';
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/Search" element={<GameSearch />} />
              <Route path="/Collection" element={<CollectionPage />} />
            </Routes>
          </>
          :
          <>  
            <Routes>
              <Route path="/*" element={<WelcomePage />} />
              <Route path="/login" element={<AuthPage setUser={setUser} />} />
            </Routes>
          </>
      }
    </main>
  );
}
