import { useState, useEffect } from "react";
import './GameSearch.css'
import { useNavigate } from "react-router-dom";
import * as gamesAPI from '../../utilities/game-api'

export default function GameSearch( {setUserGames} ) {
    const [search, setSearch] = useState('')
    const [games, setGames] = useState([])

    function handelChange(evt) {
        const searchData = evt.target.value;
        setSearch(searchData)
    }

    async function handleSearch(evt) {
        console.log('handelSearch')
        evt.preventDefault();
        const data = await gamesAPI.searchAPI(search);
        setGames(data.results);
    }
    useEffect(function() {
        console.log('useEffect')
        async function showGames() {
            const data = await gamesAPI.searchAPI(search);
            setGames(data.results);
        }
        showGames()
    },[]);

    const navigate = useNavigate()
    async function addGame(g) {
        const allUserGames = await gamesAPI.addGameToUser(g)
        console.log(allUserGames)
        setUserGames(allUserGames)
        navigate('/Collection')
    }
    return (
        <div>
            <form className="search-form" onSubmit={handleSearch}>
                <label className="label-search"> Search </label>
                <input className="search-input" type="text" value={search} onChange={handelChange}/>
                <button className="search-btn" >Find</button>
            </form>
            <div className="Search">
             {games.map(g => (
                <div key={g.id} className="game-container" >
                    <h3 className="game-name">{g.name}</h3>
                    <img className="game-img" src={g.background_image} alt="" />
                    <button onClick={() => addGame(g)}>Add Game</button>
                </div>
             ))}
             </div>
        </div>
    );
}
