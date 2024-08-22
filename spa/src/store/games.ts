import {getCookie, setCookie} from "../hepler/cookie";
import {localGet, localSet} from "../hepler/storage";
import api from "../hepler/api";
import {IGame} from "../int/interface";

interface IData {
    type: string,
    data: any
}





const games = (state: IGame = {id: null, password: null}, action: IData) => {
    console.log('games')
    if (!state?.id) state = localGet('games')
    switch (action.type) {
        case 'SET_GAME':
            localSet('games', action.data)
            return action.data
        case 'VALID_GAME':
            // inGame(action.data)
            // if(inGame) {
            //     // localSet('games', action.data)
            // }

            // localSet('games', action.data)
            return {id: null, password: null, error: true}
        case 'SET_GAME_ID':
            const result: any = {
                ...state,
                id: action.data
            }
            return result
        case 'SET_GAME_PASS':
            const result2: any = {
                ...state,
                password: action.data
            }
            return result2
        default:
            return state
    }
}

export default games
