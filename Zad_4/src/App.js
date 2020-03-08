import React, {Component} from 'react'
import  './App.css'
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) =>{
   this.setState({userInput: event.target.value})
  }

deleteCharHandler = (index) => {
  
  const text = this.state.userInput.split('')
  text.splice(index, 1)
  const updateText = text.join('')
  this.setState({userInput: updateText})

}

  render () {
    const charList = this.state.userInput.split('').map((char, index) =>{
      return <Char character={char} key={index} clicked = {() => this.deleteCharHandler(index)}/>
    })

    return (
      <div className="App">
        <ol>
      <li>Create an input field(in Ap component) with a change listener which outputs the lenght of the entered text below it(e.g. in a paragraph).</li>
      <li>Create a new component (=> ValidationComponent) which recevives the text leght as a prop.</li>
      <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text leght (e.g. take 5 as minimum leght).</li>
      <li>Create another component (=> CharComponent) and style it ass an nline box (=>display: inline-block, padding: 16px, text-allign: center, margin: 16px, border: 1px solid black).</li>
      <li>Render a list of CharComponents where each CharComponent recevies a differenet letter of the entered text (in the initial input field) as a prop</li>
      <li>When you click a CharComponent, it should be removed from the entered text.</li>
      <li>Keep in mind that JavaScript strings are basically arrays!</li> 
        </ol>
        <hr/>
        <input type="text"
         onChange={this.inputChangeHandler} 
        value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}></Validation>
        
         {charList}
    </div>
    )
  }
}
export default App;