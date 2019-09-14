import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
const classNames = require('classnames');


function ServerControl(props) {
  const ServerControlClass = classNames('ServerControl',props.className)
  return (
    <div className ={ServerControlClass}>
      <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
    </div>
  )
}

ServerControl.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default ServerControl
