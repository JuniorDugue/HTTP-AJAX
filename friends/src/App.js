import React, { Component } from 'react';
import './App.css';
import Friend from "./components/Friend";
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
      <h1>My Friendlist</h1>
      <Friend
            friends={this.state.friends}
          />
    </div>
  );
}
}

export default App;
