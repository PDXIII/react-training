import React from 'react'
import PropTypes from 'prop-types'

const Badge = ( props ) => (
  <div>
    <img
      src={ props.img }
      alt={ props.name }
      style={{
        width: '100px',
        height: '100px'
      }}
    />
    <h2>
      Name: { props.name }
    </h2>
    <h2>
      username: { props.username }
    </h2>
  </div>
)

export default Badge

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}
