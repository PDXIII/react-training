import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import api from '../utils/api'

import PlayerPreview from './PlayerPreview'
import Loading from './Loading'

const Profile = ({ profile }) => (
  <PlayerPreview
    avatar={ profile.avatar_url }
    username={ profile.login }
    >
    <ul className="profile-list-items">
      { profile.name && <li>{ profile.name }</li>}
      { profile.location && <li>{ profile.location }</li>}
      { profile.company && <li>{ profile.company }</li>}
      <li>Follower: { profile.followers }</li>
      <li>Following: { profile.following }</li>
      <li>Public Repos: { profile.public_repos }</li>
      { profile.blog && <li><a href={profile.blog}>Visit Blog</a></li>}
    </ul>
  </PlayerPreview>
)

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
}


const Player = props => (
  <div>
    <h1 className="header">
      { props.label }
    </h1>
    <h3>
      Score: { props.score }
      { console.log( props.profile )}
    </h3>
    <Profile
      profile={ props.profile }
    />
  </div>
)

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
}

class Results extends React.Component {
  constructor ( props ) {
    super( props )

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    }
  }

  componentDidMount () {
    let players = queryString.parse( this.props.location.search )

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ])
    .then(( results ) => {
      console.log( results )

      if ( results === null ) {
        this.setState({
          error: 'Looks like their was an error. Please check if both users exist on GitHub',
          loading: false,
        })
      }

      this.setState({
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false
      })
    }
  )
}

render (){
  var error = this.state.error
  var winner = this.state.winner
  var loser = this.state.loser
  var loading = this.state.loading

  if ( loading ) {
    return <Loading/>
  }

  if ( error  ) {
    return (
      <div>
        <p>{ error }</p>
        <Link
          className="reset"
          to="/battle">
          Reset
        </Link>
      </div>
    )
  }

  return (
    <div className="row">
      <Player
        label="Winner"
        score={ winner.score }
        profile={ winner.profile }
      />
      <Player
        label="Loser"
        score={ loser.score }
        profile={ loser.profile }
      />
      {/* { JSON.stringify( this.state )} */}
    </div>
  )
}
}

export default Results
