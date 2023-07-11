import { addGameToUser } from "../../utilities/game-api";
import { useNavigate } from "react-router-dom";
export default function SearchDetail({g}) {
    const navigate = useNavigate()
    async function addGame() {
        await addGameToUser(g)
        navigate('/Collection')
    }

    return (
        <>
            <h3>{g.name}</h3>
            <img src={g.background_image} alt={g.name} />
            <button onClick={addGame}>Add Game</button>
        </>
    );
}