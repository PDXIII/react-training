import axios from 'axios'

var id = 'YOUR_CLIENT_ID'
var secret = 'YOUR_SECRET_ID'
var params = `?client_id=${ id }&client_secret=${ secret }`

var getProfile = username => {
  // if you have registered your app you can use the params
  // `https://api.github.com/users/${username}${params}`
  return axios.get(`https://api.github.com/users/${ username }`)
  .then(( user ) => {
    return user.data
  })
}

var getRepos = username => {
  return axios.get(`https://api.github.com/users/${ username }/repos&per_page=100`)
  .then(( repos ) => {
    return repos.data
  })
}

var getStarCount = repos => {
  return repos.data.reduce(( count, repo ) => {
    return count + repo.stargazer_count
  }, 0)
}

var calculateScore = ( profile, repos ) => {
  var followers = profile.followers
  var totalStars = getStarCount( repos )

  return (followers * 3) + totalStars
}

var handleError = error => {
  console.warn( error )
  return null
}

var getUserData = player => {
  return axios.all([
    getProfile( player ),
    getRepos( player )
  ]).then(( data ) => {
    var profile = data[0]
    var repos = data[1]

    return {
      profile: profile,
      score: calculateScore( profile, repos )
    }
  })
}

var sortPlayers = players => {
  return players.sort(( a, b ) => b.score - a.score )
}


export default {
  battle: ( players ) => {
    return axios.all( player.map( getUserData ))
  },
  fetchPopularRepos: ( language ) => {
    const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${ language }&sort=stars&order=desc&type=Repositories`)

    return axios.get( encodeURI )
    .then(( response ) => response.data.items )
  }
}
