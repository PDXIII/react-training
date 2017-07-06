import React from 'react';

import Badge from './Badge';
import FriendsList from './FriendsList';

const USER_DATA = {
  name: 'Tyler McGinnis',
  img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
  username: 'tylermcginnis'
}

const LIST_OF_USERS = [
  { name: "Tyler", friend: true },
  { name: "Ryan", friend: true },
  { name: "Michael", friend: false },
  { name: "Mikenzi", friend: false },
  { name: "Jessica", friend: true },
  { name: "Dan", friend: false }
]


export default class Profil extends React.Component {

  render() {

    return (
      <div>
        <h1>
          { this.props.title }
        </h1>
        <Badge
          img={ USER_DATA.img }
          name={ USER_DATA.name }
          username={ USER_DATA.username }
        />
        <FriendsList
          list={ LIST_OF_USERS }
        />
      </div>
    )
  }
}
