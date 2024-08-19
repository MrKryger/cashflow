import React, {useState} from 'react';
import Main from '../Main';
import Start from '../Start';
import History from '../History/History';

const Game = () => {
    const [game, setGame] = useState(null)

    return (
        <div>
            <Start/>
            {game &&
              <div>
                <Main/>
                <History/>
              </div>
            }

        </div>
    );
}

export default Game;
