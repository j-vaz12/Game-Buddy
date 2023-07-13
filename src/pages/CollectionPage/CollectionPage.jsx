import { useState } from "react";
import { Link  } from 'react-router-dom'
export default function CollectionPage( {userGames} ) {
    // const [move, setM] = useState()   

    // function handelMove(evt) {
    //     const moveData= evt,
    // }
    return(
        <div>
            <h1>collection page</h1>
            <button>In Progress</button> <button>Completed</button> <button>Wishlist</button>
            {userGames.map(g => (
                <div key={g._id}>
                    {g.game.title}
                    <Link to={`/usergame/${g._id}`}> Detail page </Link>
                </div>
            ))}
        </div>
    );
} 