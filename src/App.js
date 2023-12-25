import './App.css';
import React from 'react';
import SearchBox from './SearchBox';

class App extends React.Component  {
    constructor(){
      super()
      this.state = {
          numbers: [],
          searchfield: ''
      }
  }
 
  onSearchChange = (e) =>{
      this.setState({ searchfield: e.target.value});
      fetch(`http://numbersapi.com/${this.state.searchfield}?json`)
          .then(response => response.json())
          .then(number => this.setState({numbers: number}))
  }
  
  render() {

    return (
      <div className="App">
        <h1>Type any number to know some facts</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <h2>{this.state.numbers.text}</h2>
      </div>
    );
  }
}

export default App;
