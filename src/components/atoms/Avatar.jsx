import React from 'react'
import PropTypes from 'prop-types'

function Avatar(props) {
  return (
    <img src={props.url} alt={props.username} />
  )
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Avatar
