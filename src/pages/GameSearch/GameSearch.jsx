import { useState, useEffect } from "react";
import './GameSearch.css'
import { useNavigate } from "react-router-dom";
import * as gamesAPI from '../../utilities/game-api'

export default function GameSearch( {setUserGames} ) {
    const [search, setSearch] = useState('')
    const [games, setGames] = useState([])
    // useEffect( function (){
    //     async function getGame() {
    //         const data = await gamesAPI.getGame();
    //     }
    // });
    function handelChange(evt) {
        const searchData = evt.target.value;
        setSearch(searchData)
    }

    async function handleSearch(evt) {
        evt.preventDefault();
        const data = await gamesAPI.searchAPI(search);
        setGames(data.results);
    }

    const navigate = useNavigate()
    async function addGame(g) {
        const allUserGames = await gamesAPI.addGameToUser(g)
        setUserGames(allUserGames)
        navigate('/Collection')
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <label> Search </label>
                <input type="text" value={search} onChange={handelChange}/>
                <button>Find</button>
            </form>
            <div className="Search">
             {games.map(g => (
                <div key={g.id} className="game-container" style={{ backgroundImage: `url(${g.background_image})`, backgroundPosition: 'center'  }}>
                    <h3>{g.name}</h3>
                    <button onClick={() => addGame(g)}>Add Game</button>
                </div>
             ))}
             </div>
        </div>
    );
}

