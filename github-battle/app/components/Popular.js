import React, { Component } from 'react'
import PropTypes from 'prop-types'

function SelectLanguage ( props ) {
  var languages = [
    'All',
    'JavaScript',
    'Ruby',
    'Java',
    'CSS',
    'Python',
  ]

  return (
    <ul className="languages">
      { languages.map((lang, key) => (
        <li
          style={ lang === props.selectedLanguage ? { color: '#d0021b'} : null }
          onClick={ props.onSelect.bind(null, lang) }
          key={ key }>
          { lang }
        </li>
      ))}
    </ul>
  )
}

SelectLanguage.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired
}

class Popular extends React.Component {

  constructor ( props ) {
    super( props )

    this.state = {
      selectedLanguage: 'All',
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage ( lang ) {
    this.setState({
      selectedLanguage: lang
    })
  }
  render () {

    return (
      <div>
        Popular
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

export default Popular
