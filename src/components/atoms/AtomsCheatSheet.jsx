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
          <li>
            <FontAwesomeIcon icon="microphone-slash" /><span><strong>icon = "microphone-slash"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="headphones-alt" /><span><strong>icon = "headphones-alt"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="cog" /><span><strong>icon = "cog"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="plus-circle" /><span><strong>icon = "plus-circle"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="gift" /><span><strong>icon = "gift"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="gift" /><span><strong>icon = "gift"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="bell" /><span><strong>icon = "bell"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="thumbtack" /><span><strong>icon = "thumbtack"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="users" /><span><strong>icon = "users"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="search" /><span><strong>icon = "search"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="at" /><span><strong>icon = "at"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="question-circle" /><span><strong>icon = "question-circle"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="user-plus" /><span><strong>icon = "user-plus"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="shield-alt" /><span><strong>icon = "shield-alt"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="pen" /><span><strong>icon = "pen"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="eye-slash" /><span><strong>icon = "eye-slash"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="arrow-circle-left" /><span><strong>icon = "arrow-circle-left"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="gamepad" /><span><strong>icon = "gamepad"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="box-open" /><span><strong>icon = "box-open"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="user-check" /><span><strong>icon = "user-check"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="phone-volume" /><span><strong>icon = "phone-volume"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="video" /><span><strong>icon = "video"</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon="plus" /><span><strong>icon = "plus"</strong></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AtomsCheatSheet
