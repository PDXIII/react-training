import React from 'react'
import PropTypes from 'prop-types'

const style = {
  content: {
    textAlign: 'center',
    fontSize: '32px',
  }
}

class Loading extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      text: props.text
    }
  }

  componentDidMount () {
    var stopper = this.props.text + '...'

    this.interval = window.setInterval(() => {
      if ( this.state.text === stopper ) {
        this.setState({
          text: this.props.text
        })
      }
      else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed )
  }

  componentWillUnmount () {
    window.clearInterval( this.interval )
  }

  render () {
    return (
      <p
        style={ style.content }>
        { this.state.text }
      </p>
    )
  }
}

export default Loading

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 120,
}
