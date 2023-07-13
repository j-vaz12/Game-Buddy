import { useParams } from "react-router-dom";

export default function InProgressPage( { userGames } ) {
    const { gameTitle } = useParams()

    let game = userGames.find(g=> g.game.title === gameTitle)
    return(
        <div>
            <h1>Games In progress</h1>
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