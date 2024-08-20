import {getCookie, setCookie} from "../hepler/cookie";
import {localGet, localSet} from "../hepler/storage";

interface IData {
    type: string,
    data: any
}

interface IGame {
    id: number | null,
    password: number | null,
}

const games = (state: IGame = {id: null, password: null}, action: IData) => {
    console.log('games')
    if (!state.id) state = localGet('games')
    switch (action.type) {
        case 'SET_GAME':
            localSet('games', action.data)
            return action.data
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
