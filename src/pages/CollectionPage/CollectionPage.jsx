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
            {userGames.map(g => (
                <div key={g._id}>
                    {g.game.title}
                    <Link  to={`/InProgress/${g.game.title}`} game={g}> Add To Progress </Link>
                    {/* <button>Add to Progress</button> */}
                    <button>Completed</button>
                </div>
            ))}
        </div>
    );
}