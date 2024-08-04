import './projects.css'; 
import tictactoe from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/tictactoe.png'

import { Spotify } from 'react-spotify-embed';


export default function Game() {
    return(
    <div id="game">
        <p>Tic Tac Toe Game</p>
        <img id='board' alt='tictactoe' src={tictactoe}></img>
    </div>
        

    );
}