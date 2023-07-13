import { useParams } from "react-router-dom";

export default function Completed( { userGames } ) {
    const { gameTitle } = useParams()

    let game = userGames.map(g => g.game.title === gameTitle);
    if (!game) return null;
    return(
        <div>
            <h1>Completed</h1>
            {/* {userGames.map(g => (
                <div key={g.id} className="game-container">
                    <h3>{g.name}</h3>
                </div>
            ))} */}

            <h1> { game.game.title } </h1>
           <label> completed </label> <input type="checkbox" />
        </div>
    );
}