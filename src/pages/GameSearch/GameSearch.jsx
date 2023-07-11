import { useState, useEffect } from "react";
import './GameSearch.css'
import * as gamesAPI from '../../utilities/game-api'
export default function GameSearch() {
    const [search, setSearch] = useState('')
    const [games, setGames] = useState([])
    // useEffect( function (){
    //     async function getGame() {
    //         const data = await gamesAPI.getGame();
    //     }
    // });
    function handelChange(evt) {
        const searchData = evt.target.value;
        console.log(searchData)
        setSearch(searchData)
    }

    async function handleSearch(evt) {
        evt.preventDefault();
        const data = await gamesAPI.searchAPI(search);
        console.log(data.results)
        setGames(data.results);
    }


    return (
        <div className="Search">
            <form onSubmit={handleSearch}>
                <label> Search </label>
                <input type="text" value={search} onChange={handelChange}/>
                <button>Find</button>
            </form>
            <div>
            {games.map(g => <h3 key={g.id}> {g.name}</h3> )}    
             </div>
        </div>
    );
}