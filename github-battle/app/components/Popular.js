import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'


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

var RepoGrid = ( props ) => (
  <div>
    <ul className="popular-list">
      { props.repos.map((repo, key) => (
        <li
          className="popular-item"
          key={ key }>
          <div className="popular-rank">
            #{ key + 1 }
          </div>
          <ul className="space-list-items">
            <li>
              <img
                className="avatar"
                src={ repo.owner.avatar_url }
                alt={`Avatar for ${ repo.owner.login }`}
              />
            </li>
            <li>
              <a href={ repo.html_url }>{ repo.name }</a>
            </li>
            <li>@{ repo.owner.login }</li>
            <li>{ repo.stargazers_count } stars</li>
          </ul>
        </li>
      ))}
    </ul>
  </div>
)

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}


class Popular extends React.Component {

  constructor ( props ) {
    super( props )

    this.state = {
      selectedLanguage: 'All',
      repos: null,
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    this.updateLanguage( this.state.selectedLanguage )
  }

  updateLanguage ( lang ) {
    this.setState({
      selectedLanguage: lang,
      repos: null,
    })

    api.fetchPopularRepos( lang )
    .then((repos) => {
      // console.log(r0epos);
      this.setState({
        repos: repos,
      })
    })
  }
  render () {
    console.log('dude');
    // api.battle('pdxiii', 'fabiantheblind')
    // then((data) => console.log(data))
    return (
      <div>
        Popular
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        { ! this.state.repos
          ? <p>LOADING</p>
          : ( <RepoGrid
            repos={ this.state.repos }
          /> )
        }

      </div>
    )
  }
}

export default Popular
