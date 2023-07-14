import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import * as userGamesAPI from '../../utilities/userGames-api'

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

    async function handleUpdate(property) {
        const updateObj = {    
            completed: false,
            wishList: false,
            inProgress: false,
        }
        updateObj[property] = true
        const updatedData = await userGamesAPI.updatedUserGame();
    }


    return(
        <div>
            <h1> { curgame.game.title } </h1>
            <img src={ curgame.game.img } alt="" />
            <h1>{ curgame.game.rating }</h1>
            <button onClick={() => handleUpdate('completed')}>completed</button>
            <button onClick={() => handleUpdate('wishList')}>In progress</button> 
            <button onClick={() => handleUpdate('inProgress')}>Wish List</button>
        </div>
    );
}