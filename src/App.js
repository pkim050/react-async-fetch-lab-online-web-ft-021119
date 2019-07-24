// create your App component here
import React from 'react';

class App extends React.Component {
  state = {
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default App
