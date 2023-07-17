import { useState, useEffect } from "react";
import { Link  } from 'react-router-dom'; 
import './CollectionPage.css'
export default function CollectionPage( {userGames, userGamesAPI, setUserGames} ) {
    const [filterWord, setFilterWord] = useState("all");
    const [filterItems, setFilterItems] = useState(userGames);
    async function handlDelete(gameId) {
        const allUserGames = await userGamesAPI.removeGame(gameId);
        setUserGames(allUserGames);
    }
    useEffect(function() {
        function filter() {
            if (filterWord === "all") setFilterItems(userGames);
            else setFilterItems(userGames.filter(g => g[filterWord]));
        }
        filter()
    }, [filterWord, userGames])

    return(
        <div >
            <h1>Collection page</h1>
            <button onClick={() => setFilterWord("inProgress")}>In Progress</button>
            <button onClick={() => setFilterWord("completed")}>Completed</button> 
            <button onClick={() => setFilterWord("wishList")}>Wish List</button> 
            <button onClick={() => setFilterWord("all")}>All Games</button> 

            <div className="Game-list">
                {filterItems.map(g => (
                        <div className="g-container" key={g._id}>
                            <span className="game-title">{g.game.title}</span>
                            <img className="game-img" src={g.game.img} alt="" />
                            <Link to={`/usergame/${g._id}`}> Detail page </Link>
                            <button onClick={() => handlDelete(g._id)}>Delete</button>
                        </div>
                ))}
            </div>
        </div>
    );
} 

// style={{ backgroundImage: `url(${g.game.img})`, backgroundPosition: 'center'  }}