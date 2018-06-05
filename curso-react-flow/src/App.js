import React, { Component } from 'react';
import logo from './logo.svg';
import { Todo } from './components/Todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Todo />
      </div>
    );
  }
}

export default App;
