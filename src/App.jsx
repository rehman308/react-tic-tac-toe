import {useState} from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Header from "./components/Header";
import Log from "./components/Log";
import Player from "./components/Player";
import {WINNING_COMBINATIONS} from "./winning-combinations";

const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null]];

function deriveActivePlayer(gameTurns) {
    let currentPlayer;

    gameTurns[0]?.player === "X" ? (currentPlayer = "O") : (currentPlayer = "X");

    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    //initially gameBoard is all null, deep copy of null board
    let gameBoard = structuredClone(initialGameBoard);

    //computes the gameBoard from gameTurns state, is then passed to the GameBoard component to render
    for (const turn of gameTurns) {
        const {
            square, player
        } = turn;
        gameBoard[square.row][square.col] = player;
    }

    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    //loop that checks after every turn if any winning combination has been done
    //it is taking Symbols from the gameBoard by using row and col define in winning combination and loops through them
    //if all the three symbols are same then winner is declared
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol !== null) {
            if (firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
                return players[firstSquareSymbol];
            }
        }
    }
}

export default function App() {
    //state to manage player names
    const [players, setPlayers] = useState({
        X: "Player 1", O: "Player 2"
    });

    //state that manages positions of the player turn and symbol of the player
    //gameTurns = [{square: {row: rowIndex, col:colIndex}, player: "X or Y"}, ...]
    const [gameTurns, setGameTurns] = useState([]);

    let activePlayer = deriveActivePlayer(gameTurns);

    const gameBoard = deriveGameBoard(gameTurns);

    //gameTurns state is updated as player clicks any button on gameBoard
    function handleActivePlayer(rowIndex, colIndex) {
        setGameTurns((prevGameTurns) => {
            //compute current player
            activePlayer = deriveActivePlayer(prevGameTurns);

            //update gameBoard if button is clicked on gameBoard
            return [{
                square: {
                    row: rowIndex, col: colIndex
                }, player: activePlayer
            }, ...prevGameTurns];
        });
    }

    //reset the gameBoard
    function handleReset() {
        setGameTurns([]);
    }

    //updates the players name state if the name is changed in player component
    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers, [symbol]: newName
            };
        })
    }

    const winner = deriveWinner(gameBoard, players);

    //Check for draw is all the squares are clicked on the gameBoard
    const hasDraw = gameTurns.length === 9 && !winner;

    return (<>
        <Header/>
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initailName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onNameChange={handlePlayerNameChange}
                    />
                    <Player
                        initailName="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onNameChange={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} handleReset={handleReset}/>}
                <GameBoard
                    switchPlayer={handleActivePlayer}
                    gameBoard={gameBoard}
                />
            </div>
        </main>
        <Log turns={gameTurns}/>
    </>);
}