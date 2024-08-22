import React, {useState} from 'react';
import Main from '../Main';
import Start from '../Start';
import History from '../History/History';
import { connect } from 'react-redux'
import {localGet} from "../hepler/storage";

const Game = ({ games }:any) => {
    const [user] = useState(localGet('user'))
    return (
        <div>
            <Start games={games}/>
            +{JSON.stringify(games)}
            {games?.userId &&
              <div key={games.userId}>
                <Main games={games} user={user}/>
                <History/>
              </div>
            }

        </div>
    );
}

const mapStateToProps = ({ games }:any) => ({
    games,
})
// const mapDispatchToProps = (dispatch: any) => ({
//     SET_GAMES: (data:any) => dispatch({ type: 'SET_GAME' , data }),
// })

export default connect(mapStateToProps)(Game);

