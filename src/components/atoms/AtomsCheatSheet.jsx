import React from 'react'
import Avatar from './Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <h3>FontAwesomeIcon</h3>
        <p className="description"> Props: icon(string, required)</p>
        <ul id="iconList">
          <li>
            <FontAwesomeIcon icon="hashtag" /><span><strong>icon ="hashtag"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="angle-down" /><span><strong>icon = "angle-down"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="volume-up" /><span><strong>icon = "volume-up"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="lock" /><span><strong>icon = "lock"</strong></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AtomsCheatSheet
