import { useState, useEffect } from "react";
import { Link  } from 'react-router-dom'
export default function CollectionPage( {userGames, userGamesAPI, setUserGames} ) {
    const [filterWord, setFilterWord] = useState("all");
    const [filterItems, setFilterItems] = useState(userGames);
    async function handlDelete(gameId) {
        const allUserGames = await userGamesAPI.removeGame(gameId);
        setUserGames(allUserGames);
    }

    useEffect(function() {
        function filter() {
            if (filterWord === "all") return setFilterItems(userGames);
            const filteredItems = userGames.filter(g => g[filterWord]);
            setFilterItems(filteredItems);
        }
    }, [filterWord])

    return(
        <div>
            <h1>Collection page</h1>
            <button onClick={() => setFilterWord("inProgress")}>In Progress</button>
            <button onClick={() => setFilterWord("completed")}>Completed</button> 
            <button onClick={() => setFilterWord("wishList")}>Wish List</button> 
            <button onClick={() => setFilterWord("all")}>All Games</button> 

            {filterItems.map(g => (
                <div key={g._id}>
                    {g.game.title}
                    <Link to={`/usergame/${g._id}`}> Detail page </Link>
                    <button onClick={() => handlDelete(g._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
} 