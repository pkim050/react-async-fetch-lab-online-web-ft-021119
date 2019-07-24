// create your App component here
import React from 'react';

class App extends React.Component {
  state = {
    peopleInSpace: []
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({peopleInSpace: data})
    })
  }
  render() {
    return(
      <div>
        {this.state.peopleInSpace}
      </div>
    )
  }
}

export default App
