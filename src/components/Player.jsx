import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditting] = useState(false)

    function handleEditClick() {
        // setIsEditting(!isEditing)
        setIsEditting((editing) => !editing)


    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? <input type="text" required value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing ? <button onClick={handleEditClick}>Save</button> : <button onClick={handleEditClick}>Edit</button>}
        </li>
    )
}