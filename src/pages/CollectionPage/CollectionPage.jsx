export default function CollectionPage( {userGames} ) {
    return(
        <div>
            <h1>collection page</h1>
            {userGames.map(g => (
                <h3 key={g._id}>{g.game.title}</h3>
            ))}
        </div>
    );
}