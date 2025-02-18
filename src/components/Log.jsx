export default function Log({ turns }) {
    if (turns.length > 0) {
        return (
            <ol id="log">
                {turns.map(({ square, player }) => {
                    return (
                        <li key={`${square.row}${square.col}`}>
                            {player} selected: {square.row}, {square.col}
                        </li>
                    );
                })}
            </ol>
        );
    }
}
