import {useState} from "react";

export default function Player({initailName, symbol, isActive, onNameChange}) {
    // isEditing is use to show inputbox for editing player name and change button text from edit and save
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initailName);

    function handleEditClick() {
        setIsEditing((prev) => !prev);
        if (isEditing) onNameChange(symbol, playerName);
    }

    function handlePlayerNameChange(event) {
        let newValue = event.target.value;
        setPlayerName((prev) => newValue);
    }

    let playerNameHTML = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        playerNameHTML = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handlePlayerNameChange}></input>
        );
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? "active" : null}>
            <span className="player">
                {/* if player is editing then show inputbox else show name */}
                {playerNameHTML}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}