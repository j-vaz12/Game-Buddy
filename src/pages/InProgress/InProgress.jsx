export default function( { userGames } ) {
    return(
        <div>
            <h1>Games In progress</h1>
            {userGames.map(g => (
                <div key={g.id} className="game-container">
                    <h3>{g.name}</h3>
                </div>
            ))}
        </div>
    );
}