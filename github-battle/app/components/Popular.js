import React, { PropTypes } from 'react'

const Popular = React.createClass({
  
  constructor ( props ) {
    super( props )
    
    this.state = {
      selectedLanguage: 'All',
    }
  }
  render () {
    var languages = [
      'All',
      'JavaScript',
      'Python',
      'CSS',
      'Java',
      'Ruby',
    ]
    
    return (
      <div>
        Popular
        <ul className="languages">
          { languages.map((item, key) => (
            <li key={ key }>{ item }</li>
          ))}
        </ul>
      </div>
    )
  }
})

export default Popular
