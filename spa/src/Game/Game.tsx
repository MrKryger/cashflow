import React, {useState} from 'react';
import Main from '../Main';
import Start from '../Start';
import History from '../History/History';
import { connect } from 'react-redux'

const Game = ({ games }:any) => {

    return (
        <div>
            -{JSON.stringify(games)}-
            <Start games={games}/>
            {games?.id &&
              <div key={games.id}>
                <Main games={games}/>
                {/*<History/>*/}
              </div>
            }

        </div>
    );
}

const mapStateToProps = (state:any) => ({
    games: state.games
})

export default connect(mapStateToProps)(Game);

