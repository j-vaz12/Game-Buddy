import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import GameSearch from '../GameSearch/GameSearch';
import CollectionPage from '../CollectionPage/CollectionPage';
import DetailPage from '../DetailPage/DetailPage';
import * as userGamesAPI from '../../utilities/userGames-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [userGames, setUserGames] = useState([]);

  useEffect( function (){
    async function getUserGames(){
      const data = await userGamesAPI.getAllUserGames();
      console.log(data)
      setUserGames(data)
    }
    getUserGames();
  }
  , [user]);
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/Search" element={<GameSearch setUserGames={setUserGames}/>} />
              <Route path="/Collection" element={<CollectionPage userGames={userGames}/>} />
              <Route path="/usergame/:id" element={<DetailPage userGames={userGames}/>} />
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
