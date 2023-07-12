import { useState, useEffect } from "react";
import './GameSearch.css'
import * as gamesAPI from '../../utilities/game-api'
import SearchDetail from "../../components/SearchDetail/SearchDetail";

export default function GameSearch( {GamesPage} ) {
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

    const searchDetails = games.map( g => <SearchDetail className="game-container" key={g.id} g={g} />)

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label> Search </label>
                <input type="text" value={search} onChange={handelChange}/>
                <button>Find</button>
            </form>
            <div className="Search">
             {searchDetails}
             </div>
        </div>
    );
}