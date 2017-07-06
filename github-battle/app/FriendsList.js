import React from 'react'
import PropTypes from 'prop-types'


const friends = props => props.list.filter(item => item.friend);

const nonFriends = props => props.list.filter(item => !item.friend);

const FriendsList = props =>
  <div>
    <h1>Friends</h1>
    <ul>
      {friends(props).map((item, key) => <li key={key}>{item.name}</li>)}
    </ul>

    <hr />

    <h1> Non Friends </h1>
    <ul>
      {nonFriends(props).map((item, key) => <li key={key}>{item.name}</li>)}
    </ul>
  </div>;

export default FriendsList

FriendsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
  })),
}
