import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as userGamesAPI from '../../utilities/userGames-api'

export default function InProgressPage( { userGames, setUserGames } ) {
    const { id } = useParams();
    const [curgame, setcurrGame] = useState(null)
    const navigate = useNavigate()

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
        const allUserGames = await userGamesAPI.updatedUserGame(updateObj, id);
        setUserGames(allUserGames)
        const gameDetail = userGames.find(g => g._id === id);
        setcurrGame(gameDetail); 
        navigate('/Collection')
        console.log(gameDetail);
    }


    return(
        <div>
            <h1> { curgame.game.title } </h1>
            <img src={ curgame.game.img } alt="" />
            <h1>{ curgame.game.rating }</h1>
            <button onClick={() => handleUpdate('inProgress')}>In progress</button> 
            <button onClick={() => handleUpdate('completed')}>completed</button>
            <button onClick={() => handleUpdate('wishList')}>Wish List</button>
        </div>
    );
}