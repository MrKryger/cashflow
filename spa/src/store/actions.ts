import {IGame} from "../int/interface";

export const setGame = (data:IGame) => ({
    type: 'SET_GAME',
    data
})
export const setGameId = (data:number) => ({
    type: 'SET_GAME_ID',
    data
})
export const setGamePassword = (data:number) => ({
    type: 'SET_GAME_PASS',
    data
})
