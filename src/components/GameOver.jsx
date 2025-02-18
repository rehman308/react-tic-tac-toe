export default function GameOver({winner, handleReset}) {
    return (<div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It&#39;s a draw!</p>}
        <p>
            <button onClick={handleReset}>Rematch ?</button>
        </p>
    </div>)
}