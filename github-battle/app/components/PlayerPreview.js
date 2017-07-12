import React from 'react'
import PropTypes from 'prop-types'

export default (props) => {
  propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }

  return (
    <div>
      <div className="column">
        <img
          src={ props.avatar }
          alt={ `${ props.username }’s avatar` }
          className="avatar"
        />
        <h2 className="username">
          @{ props.username }
        </h2>
      </div>
      { props.children }
    </div>
  )
}
