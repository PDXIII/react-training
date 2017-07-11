import axios from 'axios'

var token = '5eb34285f35ce7e140021cb4e3ea19bff502e78e'

var id = '78bcbfd573253b7e382a'
var secret = '5836ae0b96efb221ae01606e61d11f15af698b0a'
var params = `?client_id=${ id }&client_secret=${ secret }`

var getProfile = username => {
  // if you have registered your app you can use the params
  // `https://api.github.com/users/${username}${params}`
  return axios.get(`https://api.github.com/users/${ username }${ params }`)
  .then(( user ) => {
    return user.data
  })
}

var getRepos = username => {
  return axios.get(`https://api.github.com/users/${ username }/repos${ params }&per_page=100`)
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
    .then(sortPlayers)
    .catch(handleError)
  },
  fetchPopularRepos: ( language ) => {
    const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${ language }&sort=stars&order=desc&type=Repositories`)

    return axios.get( encodeURI )
    .then(( response ) => response.data.items )
  }
}
