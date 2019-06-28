import React, { Component } from 'react';
import './App.css';
import Friend from "./components/Friend";
import AddFriend from "./components/AddFriend";
import axios from "axios";
import { Route } from 'react-router-dom'

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

  addFriend = data => {
    axios
      .post("http://localhost:5000/friends", data)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err));
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
      <h1>My Friendlist</h1>
      <Friend
        friends={this.state.friends}
        deleteFriend={this.deleteFriend}
      />
      <Route
        path='/add-friend'
        render={(props) => <AddFriend addFriend={this.addFriend} />}
      />
    </div>
  );
}
}

export default App;
