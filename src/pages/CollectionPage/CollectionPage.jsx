import { useState } from "react";

export default function CollectionPage( {userGames} ) {
    const [] = useState()

    return(
        <div>
            <h1>collection page</h1>
            {userGames.map(g => (
                <div key={g._id}>
                    {g.game.title}
                    <button>Add to Progress</button>
                    <button>Completed</button>
                </div>
            ))}
        </div>
    );
}