import React from 'react'
import PropTypes from 'prop-types'
const classNames = require('classnames')


function Username(props) {
  const userNameClasses = classNames(props.status,props.size,props.color,'Username')
  return (
    <div className={userNameClasses}>
      {props.username}
    </div>
  )
}

Username.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  username: PropTypes.string.isRequired,
  status: PropTypes.bool
}

export default Username
