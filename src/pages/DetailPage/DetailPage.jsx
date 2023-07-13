import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function InProgressPage( { userGames } ) {
    const { id } = useParams();
    const [curgame, setcurrGame] = useState(null)

    useEffect( function (){
        async function getCurrGame(){
            const gameDetail = userGames.find(g => g._id === id);
            setcurrGame(gameDetail);
        }
        getCurrGame();
    }, [id]);

    if (!curgame) return null;

    return(
        <div>
            <h1> { curgame.game.title } </h1>
            <img src={curgame.game.img} alt="" />
            
        </div>
    );
}