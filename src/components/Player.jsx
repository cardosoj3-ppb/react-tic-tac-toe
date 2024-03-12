import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(value) {
    setIsEditing(value);
  }

  let playerName = (
    <>
      <span className="player-name">{name}</span>
      <span className="player-symbol">{symbol}</span>
    </>
  );

  if (isEditing) {
    playerName = (
      <>
        <input type="text" className="player-name" required></input>
        <span className="player-symbol">{symbol}</span>
      </>
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
