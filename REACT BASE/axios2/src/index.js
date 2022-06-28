import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddUser from './AddUser';
import './index.css';
import ListUser from './ListUser';
import './config/axiosconfig';
import * as axios from 'axios';
import dataPhoto from './data'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      photos: dataPhoto,
      selectedUser: null
    }
  }

  selectUser = (index) => {
    this.setState({
      selectedUser: index
    })
  }
  deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(
        response => {
            console.log(response);
        }
    )
}

  componentDidMount() {
    axios.get('/users' , {
      timeout:2000,
      headers : { 
        test:true
      }
    }).then(
      response => response.data
        // console.log(response)
    )
  .then (
      usersFromApi => this.setState({users: usersFromApi})
    ).catch( err => console.log(err))
  }


  render() {
    return (
      <div
       style={{minHeight: '100vh'}}
       className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
        <ListUser deleteUser={this.deleteUser} photo={this.state.photos} users={this.state.users} selectUser={this.selectUser} />
        {/* <ListUser users={this.state.users} selectUser={(index) => this.setState({selectedUser: index})} /> */}
        <hr className="w-100 my-5" />
        <AddUser user={this.state.users && this.state.users[this.state.selectedUser] ?
        this.state.users[this.state.selectedUser] : null
        } />
      </div>
    );
  }
}

export default App;

ReactDOM.render(

    <App />,
  document.getElementById('root')
);