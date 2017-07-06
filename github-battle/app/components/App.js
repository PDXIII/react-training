import React from 'react'

import Popular from './Popular'


class App extends React.Component {
  
  render() {
    
    return (
      <div className="container">
        <h1>
          GitHub Battle!
        </h1>
        <Popular/>
      </div>
    )
  }
}

export default App;