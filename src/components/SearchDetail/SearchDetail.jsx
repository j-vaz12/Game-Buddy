import { addGameToUser } from "../../utilities/game-api";
import { useNavigate } from "react-router-dom";
import './SearchDetail.css'

export default function SearchDetail({g}) {
    const navigate = useNavigate()
    async function addGame() {
        await addGameToUser(g)
        navigate('/Collection')
    }

    return (
        <div className="game-container" style={{ backgroundImage: `url(${g.background_image})`, backgroundPosition: 'center'  }}>
            <h3>{g.name}</h3>
            {/* <img src={g.background_image} alt={g.name} className="game-image" /> */}
            <button onClick={addGame}>Add Game</button>
        </div>
        
    );
}