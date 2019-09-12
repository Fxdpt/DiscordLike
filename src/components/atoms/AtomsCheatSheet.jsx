import React from 'react'
import Avatar from './Avatar'

function AtomsCheatSheet() {
  return (
    <div className="AtomsCheatSheet">
      <h1>Atoms Cheat Sheet DiscordLike</h1>
      <div>
        <h3>Avatar</h3>
        <p className="description">Props: url(string, required) / username(string,required)</p>
        <ul>
          <li>
          <Avatar url="https://www.placecage.com/100/100" username="Nicolas Cage" className="avatar-atoms"></Avatar><span><strong>className = "avatar-atoms"</strong></span>
          </li>
          <li>
          <Avatar url="https://www.placecage.com/100/100" username="Nicolas Cage" className="avatar-atoms_new_message"></Avatar><span><strong>className = "avatar-atoms_new_message"</strong></span>
          </li>
        </ul>
        <h3>Icons</h3>
      </div>
    </div>
  )
}

export default AtomsCheatSheet
