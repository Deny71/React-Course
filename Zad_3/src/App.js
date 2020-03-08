import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component{
  state = {
    userName: 'DamianState'
  }

  usernameChangeHandler =(event) => {
    this.setState({
      userName: event.target.value
    })
  }


  render(){
    return (
      <div className="App">
        <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <li>UserInput should hold and input element, UserOutput two pharagraphs </li>
        <li>Output multiple UsersOutput components in the App component (any pharagraph text of your choice)</li>
        <li>Pass a username (of your choice) to UserOutput via props and display it there)</li>
        <li>Add a state to the App component (=> the username) and pass the username to the UserOutput component)</li>
        <li>Add a method to maniuplate the state (=> an event-handler method)</li>
        <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
        <li>Ensure that the new input entered by the user overwrites the old username passed to the UserOutput</li>
        <li>Add two-way-binding to yout input (in UserInput) to also dispaly the starting username</li>
        <li>Add styling of your choice to your components/elements in the components - both with inline styles and stylesheets </li>
        </ol>
        <UserInput changed={this.usernameChangeHandler}
        currentName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
  
        <UserInput/>
        <UserOutput userName="Pawel"/>
      </div>
    )
  }
}


export default App;
